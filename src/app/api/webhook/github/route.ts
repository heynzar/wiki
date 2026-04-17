import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import {
  fetchFileCommitDates,
  upsertPage,
  markPageDeleted,
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
  if (!secret) return false;

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

function pathToMeta(filePath: string): {
  slug: string;
  url: string;
  title: string;
} {
  const clean = filePath
    .replace(CONTENT_PREFIX, "")
    .replace(/\.(mdx?|md)$/, "")
    .replace(/\/index$/, "");

  const slugs = clean.split("/").filter(Boolean);
  const slug = slugs.join("/");
  const url = "/docs/" + slug;
  const title = slugLabel(slugs[slugs.length - 1] ?? "");

  return { slug, url, title };
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  if (!(await verifySignature(req, rawBody))) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = req.headers.get("x-github-event");
  if (event === "ping") return NextResponse.json({ ok: true, message: "pong" });
  if (event !== "push")
    return NextResponse.json({ ok: true, message: "ignored" });

  let payload: GitHubPushPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const token = process.env.GITHUB_TOKEN ?? "";

  const changedFiles = new Set<string>();
  const removedFiles = new Set<string>();

  for (const commit of payload.commits ?? []) {
    for (const file of [...(commit.added ?? []), ...(commit.modified ?? [])]) {
      if (file.startsWith(CONTENT_PREFIX)) changedFiles.add(file);
    }
    for (const file of commit.removed ?? []) {
      if (file.startsWith(CONTENT_PREFIX)) removedFiles.add(file);
    }
  }

  const updated: string[] = [];
  const deleted: string[] = [];
  const skipped: string[] = [];

  for (const filePath of changedFiles) {
    const { slug, url, title } = pathToMeta(filePath);

    const dates = await fetchFileCommitDates(OWNER, REPO, filePath, token);
    if (!dates.length) {
      skipped.push(slug);
      continue;
    }

    const record: PageRecord = {
      title,
      url,
      createdAt: dates[dates.length - 1].toISOString(),
      allDates: dates.map((d) => d.toISOString()),
      deletedAt: null,
    };

    await upsertPage(slug, record);
    updated.push(slug);
  }

  for (const filePath of removedFiles) {
    const { slug } = pathToMeta(filePath);
    await markPageDeleted(slug);
    deleted.push(slug);
  }

  console.log(
    `Webhook: updated=[${updated}] deleted=[${deleted}] skipped=[${skipped}]`,
  );
  return NextResponse.json({ ok: true, updated, deleted, skipped });
}

type GitHubPushPayload = {
  commits?: Array<{
    added?: string[];
    modified?: string[];
    removed?: string[];
  }>;
};
