import { NextResponse } from "next/server";

const MAX_NAME = 200;
const MAX_COMPANY = 200;
const MAX_MESSAGE = 8000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (ch) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[ch] ?? ch;
  });
}

function str(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const honeypot = str(body.website, 500);
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, MAX_NAME);
  const email = str(body.email, 320);
  const company = str(body.company, MAX_COMPANY);
  const message = str(body.message, MAX_MESSAGE);
  const locale = str(body.locale, 8) === "de" ? "de" : "en";

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "info@petrustravel.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Petrus Travel <onboarding@resend.dev>";

  const subject = `[Petrus inquiry] ${name}${company ? ` — ${company}` : ""}`;

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
  <p><strong>New inquiry</strong> (${escapeHtml(locale)})</p>
  <p><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
</body>
</html>
`.trim();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("Resend error:", res.status, errText);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
