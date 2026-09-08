import type { APIRoute } from 'astro';

export const prerender = false;

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
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });

export const OPTIONS: APIRoute = () => json(null, 204);

export const POST: APIRoute = async ({ request, locals }) => {
  // Env vars from Cloudflare (Pages → Settings → Variables and secrets)
  const env = (locals as any).runtime?.env ?? (locals as any).env ?? {};
  // Fallback for newer cloudflare:workers style if you prefer:
  // import { env } from 'cloudflare:workers';

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error('Missing RESEND_API_KEY, CONTACT_TO, or CONTACT_FROM');
    return json({ success: false, message: 'Server configuration error.' }, 500);
  }

  let body: ContactBody;
  const contentType = request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      body = (await request.json()) as ContactBody;
    } else {
      const form = await request.formData();
      body = {
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        organization: String(form.get('organization') || ''),
        message: String(form.get('message') || ''),
        botcheck: form.get('botcheck') ? true : false,
      };
    }
  } catch {
    return json({ success: false, message: 'Invalid request body.' }, 400);
  }

  if (body.botcheck) {
    return json({ success: true, message: 'Thank you.' });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const organization = (body.organization || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return json({ success: false, message: 'Name, email, and message are required.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, message: 'Please provide a valid email address.' }, 400);
  }

  if (message.length > 5000) {
    return json({ success: false, message: 'Message is too long.' }, 400);
  }

  const html = `
    <h2>New briefing request — AgentJetson</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization || '—')}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    <hr />
    <p style="color:#666;font-size:12px">Submitted via agentjetson.ai contact form</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Briefing request: ${name}${organization ? ` (${organization})` : ''}`,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Resend error:', res.status, errText);
    return json({ success: false, message: 'Failed to send. Please email us directly.' }, 502);
  }

  return json({ success: true, message: 'Thank you. We’ll be in touch shortly.' });
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}