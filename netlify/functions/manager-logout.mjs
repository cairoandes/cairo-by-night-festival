import { logout, verifyRequestOrigin } from '@netlify/identity';
import { handleError } from './_manager-auth.mjs';

export default async request => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  try {
    verifyRequestOrigin(request);
    await logout();
    return new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    return handleError(error);
  }
};

export const config = { path: '/api/manager/logout' };
