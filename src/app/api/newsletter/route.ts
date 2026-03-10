import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

export async function POST(req: Request) {
  const { name, email, location, browser, os } = await req.json();

  if (!email.endsWith("@gmail.com")) {
    return NextResponse.json(
      { error: "Only @gmail.com addresses are accepted." },
      { status: 400 },
    );
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        date: new Date().toISOString(),
        location,
        browser,
        os,
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Oops! Something went wrong. Please try again, or come back later.",
      },
      { status: 500 },
    );
  }
}
