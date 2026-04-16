import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { source } from "@/lib/source";
import {
  fetchFileCommitDates,
  upsertPage,
  type PageRecord,
} from "@/lib/logbook";

const OWNER = "heynzar";
const REPO = "wiki";
const CONTENT_PREFIX = "content/docs/";

async function verifySignature(
  req: NextRequest,
  rawBody: string,
): Promise<boolean> {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  if (!secret) {
    console.error("GITHUB_WEBHOOK_SECRET is not set");
    return false;
  }

  const signature = req.headers.get("x-hub-signature-256");
  if (!signature) return false;

  const expected =
    "sha256=" +
    crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

function slugLabel(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function findPageByPath(filePath: string) {
  const stripped = filePath
    .replace(CONTENT_PREFIX, "")
    .replace(/\.(mdx?|md)$/, "");

  return source.getPages().find((page) => page.path === stripped) ?? null;
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  const valid = await verifySignature(req, rawBody);
  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: GitHubPushPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const event = req.headers.get("x-github-event");
  if (event === "ping") {
    return NextResponse.json({ ok: true, message: "pong" });
  }
  if (event !== "push") {
    return NextResponse.json({ ok: true, message: "ignored" });
  }

  const changedFiles = new Set<string>();
  for (const commit of payload.commits ?? []) {
    for (const file of [...(commit.added ?? []), ...(commit.modified ?? [])]) {
      if (file.startsWith(CONTENT_PREFIX)) {
        changedFiles.add(file);
      }
    }
  }

  if (changedFiles.size === 0) {
    return NextResponse.json({ ok: true, message: "no content files changed" });
  }

  const token = process.env.GITHUB_TOKEN ?? "";
  const updated: string[] = [];
  const skipped: string[] = [];

  for (const filePath of changedFiles) {
    const page = findPageByPath(filePath);
    if (!page) {
      skipped.push(filePath);
      continue;
    }

    const dates = await fetchFileCommitDates(OWNER, REPO, filePath, token);
    if (!dates.length) {
      skipped.push(filePath);
      continue;
    }

    const slug = page.slugs.join("/");
    const [cat, sub] = page.slugs;
    const tag =
      cat && sub
        ? `${slugLabel(cat)} // ${slugLabel(sub)}`
        : cat
          ? slugLabel(cat)
          : undefined;

    const record: PageRecord = {
      title: page.data.structuredData.headings[0]?.content ?? page.data.title,
      url: page.url,
      slugs: page.slugs,
      tag,
      createdAt: dates[dates.length - 1].toISOString(),
      allDates: dates.map((d) => d.toISOString()),
    };

    await upsertPage(slug, record);
    updated.push(slug);
  }

  console.log(
    `Webhook processed — updated: [${updated.join(", ")}], skipped: [${skipped.join(", ")}]`,
  );

  return NextResponse.json({ ok: true, updated, skipped });
}

type GitHubPushPayload = {
  commits?: Array<{
    added?: string[];
    modified?: string[];
    removed?: string[];
  }>;
};
