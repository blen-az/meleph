import { NextResponse } from "next/server";
import { ENQUIRY_PATHS, INTERESTS } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/**
 * Get Started form submissions. Sent to the same lead webhook as Mel,
 * with `kind: "enquiry"` and the visitor's intent as structured fields.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = {
    kind: "enquiry",
    path: str(body.path, 20),
    interest: str(body.interest, 40),
    name: str(body.name, 200),
    company: str(body.company, 200),
    email: str(body.email, 320),
    phone: str(body.phone, 40),
    message: str(body.message, 4000),
    source: str(body.source, 300),
    submittedAt: new Date().toISOString(),
  };

  const valid =
    ENQUIRY_PATHS.some((p) => p.value === record.path) &&
    INTERESTS.some((i) => i.value === record.interest) &&
    record.name &&
    record.company &&
    EMAIL_RE.test(record.email) &&
    record.message.length >= 10;

  if (!valid) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.log("[enquiry] LEAD_WEBHOOK_URL not set; enquiry logged only:", record);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...record, key: record.email.toLowerCase() }),
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] webhook failed", err);
    return NextResponse.json({ error: "We could not send your enquiry." }, { status: 502 });
  }
}
