import type { APIRoute } from 'astro';
// @ts-expect-error Cloudflare Workers runtime module
import { env } from 'cloudflare:workers';

export const prerender = false;

interface InvestorBody {
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
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

export const POST: APIRoute = async ({ request }) => {
  // Prefer dedicated relations inbox; fall back only if misconfigured
  const to = env.RELATIONS_TO || env.CONTACT_TO;
  if (!env.RESEND_API_KEY || !to || !env.CONTACT_FROM) {
    console.error('Missing RESEND_API_KEY, RELATIONS_TO (or CONTACT_TO), or CONTACT_FROM');
    return json({ success: false, message: 'Server configuration error.' }, 500);
  }

  let body: InvestorBody;
  const contentType = request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      body = (await request.json()) as InvestorBody;
    } else {
      const form = await request.formData();
      body = {
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        organization: String(form.get('organization') || ''),
        role: String(form.get('role') || ''),
        message: String(form.get('message') || ''),
        botcheck: form.get('botcheck') ? true : false,
      };
    }
  } catch {
    return json({ success: false, message: 'Invalid request body.' }, 400);
  }

  // Honeypot — bots fill it, humans don't
  if (body.botcheck) {
    return json({ success: true, message: 'Thank you.' });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const organization = (body.organization || '').trim();
  const role = (body.role || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email) {
    return json({ success: false, message: 'Name and email are required.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, message: 'Please provide a valid email address.' }, 400);
  }

  if (message.length > 2000) {
    return json({ success: false, message: 'Message is too long.' }, 400);
  }

  const html = `
    <h2>Investor materials request — AgentJetson</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organization / firm:</strong> ${escapeHtml(organization || '—')}</p>
    <p><strong>Role:</strong> ${escapeHtml(role || '—')}</p>
    <p><strong>Note:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message || '—')}</pre>
    <hr />
    <p style="color:#666;font-size:12px">Submitted via agentjetson.ai investor form. Do not auto-attach the deck — reply with a controlled trackable link after qualification.</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [to],
      reply_to: email,
      subject: `Investor request: ${name}${organization ? ` (${organization})` : ''}`,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Resend error:', res.status, errText);
    return json({ success: false, message: 'Failed to send. Please email relations@agentjetson.ai directly.' }, 502);
  }

  return json({
    success: true,
    message: 'Thank you. We’ll review and send materials shortly.',
  });
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
