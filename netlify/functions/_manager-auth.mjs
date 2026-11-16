import { getUser } from '@netlify/identity';

export const requireManager = async () => {
  const user = await getUser();
  if (!user) throw new Response('Unauthorized', { status: 401 });
  return user;
};

export const safeJson = async request => {
  const raw = await request.text();
  if (raw.length > 1_500_000) throw new Response('Payload too large', { status: 413 });
  try {
    return JSON.parse(raw || '{}');
  } catch {
    throw new Response('Invalid JSON', { status: 400 });
  }
};

export const json = (value, status = 200, extraHeaders = {}) => Response.json(value, {
  status,
  headers: { 'cache-control': 'no-store', ...extraHeaders }
});

export const handleError = error => {
  if (error instanceof Response) return error;
  console.error(error);
  return json({ error: 'Unexpected server error' }, 500);
};
