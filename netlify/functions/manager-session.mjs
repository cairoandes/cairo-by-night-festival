import { getUser } from '@netlify/identity';
import { handleError, json } from './_manager-auth.mjs';

export default async request => {
  if (request.method !== 'GET') return new Response('Method not allowed', { status: 405 });
  try {
    const user = await getUser();
    return json({ authenticated: Boolean(user), user: user ? { id: user.id, email: user.email, roles: user.roles || [] } : null });
  } catch (error) {
    return handleError(error);
  }
};

export const config = { path: '/api/manager/session' };
