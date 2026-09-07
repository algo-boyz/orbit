/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Secrets (set in Cloudflare dashboard → Pages project → Settings → Environment variables):
 *   RESEND_API_KEY   – from https://resend.com
 *   CONTACT_TO       – where briefing requests land (e.g. hello@agentjetson.ai)
 *   CONTACT_FROM     – verified sender on Resend (e.g. "AgentJetson <noreply@agentjetson.ai>")
 */

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
  botcheck?: string | boolean;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

export const onRequestOptions: PagesFunction = async () =>
  json(null, 204);

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error("Missing RESEND_API_KEY, CONTACT_TO, or CONTACT_FROM");
    return json({ success: false, message: "Server configuration error." }, 500);
  }

  let body: ContactBody;

  const contentType = request.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      body = (await request.json()) as ContactBody;
    } else {
      const form = await request.formData();
      body = {
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        organization: String(form.get("organization") || ""),
        message: String(form.get("message") || ""),
        botcheck: form.get("botcheck") ? true : false,
      };
    }
  } catch {
    return json({ success: false, message: "Invalid request body." }, 400);
  }

  // Honeypot — bots fill this; humans leave it empty
  if (body.botcheck) {
    return json({ success: true, message: "Thank you." });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const organization = (body.organization || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return json({ success: false, message: "Name, email, and message are required." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, message: "Please provide a valid email address." }, 400);
  }

  if (message.length > 5000) {
    return json({ success: false, message: "Message is too long." }, 400);
  }

  const html = `
    <h2>New briefing request — AgentJetson</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization || "—")}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    <hr />
    <p style="color:#666;font-size:12px">Submitted via agentjetson.ai contact form</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Briefing request: ${name}${organization ? ` (${organization})` : ""}`,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", res.status, errText);
    return json({ success: false, message: "Failed to send. Please email us directly." }, 502);
  }

  return json({ success: true, message: "Thank you. We’ll be in touch shortly." });
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
