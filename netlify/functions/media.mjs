import { randomUUID } from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { verifyRequestOrigin } from '@netlify/identity';
import { handleError, json, requireManager } from './_manager-auth.mjs';

const store = () => getStore('cairo-by-night-media');
const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif']);
const extensions = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/avif': 'avif' };

export default async request => {
  try {
    const url = new URL(request.url);
    if (request.method === 'GET') {
      const key = url.searchParams.get('key');
      if (!key || !/^[a-z0-9-]+\.(jpg|png|webp|avif)$/i.test(key)) return new Response('Not found', { status: 404 });
      const entry = await store().getWithMetadata(key, { type: 'arrayBuffer' });
      if (!entry) return new Response('Not found', { status: 404 });
      return new Response(entry.data, { headers: {
        'content-type': entry.metadata?.contentType || 'application/octet-stream',
        'cache-control': 'public, max-age=31536000, immutable',
        'x-content-type-options': 'nosniff'
      } });
    }
    if (request.method === 'POST') {
      verifyRequestOrigin(request);
      const user = await requireManager();
      const contentType = (request.headers.get('content-type') || '').split(';')[0].toLowerCase();
      const length = Number(request.headers.get('content-length') || 0);
      if (!allowedTypes.has(contentType)) return json({ error: 'Use JPG, PNG, WEBP or AVIF images.' }, 415);
      if (length > 8_000_000) return json({ error: 'The image must be smaller than 8 MB.' }, 413);
      const data = await request.arrayBuffer();
      if (!data.byteLength || data.byteLength > 8_000_000) return json({ error: 'The image must be smaller than 8 MB.' }, 413);
      const key = `${randomUUID()}.${extensions[contentType]}`;
      await store().set(key, data, { metadata: {
        contentType,
        originalName: (request.headers.get('x-file-name') || 'upload').slice(0, 180),
        uploadedAt: new Date().toISOString(),
        uploadedBy: user.email || user.id
      } });
      return json({ key, url: `/api/manager/media?key=${encodeURIComponent(key)}` }, 201);
    }
    return new Response('Method not allowed', { status: 405 });
  } catch (error) {
    return handleError(error);
  }
};

export const config = { path: '/api/manager/media' };
