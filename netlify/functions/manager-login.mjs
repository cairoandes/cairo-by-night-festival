import { login, verifyRequestOrigin } from '@netlify/identity';
import { handleError, json, safeJson } from './_manager-auth.mjs';

export default async request => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  try {
    verifyRequestOrigin(request);
    const { email, password } = await safeJson(request);
    if (!email || !password) return json({ error: 'Email and password are required.' }, 400);
    const user = await login(email, password);
    return json({ user: { id: user.id, email: user.email } });
  } catch (error) {
    if (error?.status === 401 || /invalid|credential/i.test(error?.message || '')) {
      return json({ error: 'Invalid email or password.' }, 401);
    }
    return handleError(error);
  }
};

export const config = { path: '/api/manager/login' };
