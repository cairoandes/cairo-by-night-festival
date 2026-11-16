import { getStore } from '@netlify/blobs';
import { verifyRequestOrigin } from '@netlify/identity';
import { handleError, json, requireManager, safeJson } from './_manager-auth.mjs';

const store = () => getStore('cairo-by-night-content');

export default async request => {
  try {
    if (request.method === 'GET') {
      const content = await store().get('published', { type: 'json', consistency: 'strong' });
      return json(content || { version: 1, team: { artists: [] }, textOverrides: {} }, 200, {
        'cache-control': 'public, max-age=0, must-revalidate'
      });
    }
    if (request.method === 'PUT') {
      verifyRequestOrigin(request);
      const user = await requireManager();
      const content = await safeJson(request);
      const value = {
        version: 1,
        team: { artists: Array.isArray(content?.team?.artists) ? content.team.artists.slice(0, 100) : [] },
        textOverrides: content?.textOverrides && typeof content.textOverrides === 'object' ? content.textOverrides : {},
        updatedAt: new Date().toISOString(),
        updatedBy: user.email || user.id
      };
      await store().setJSON('published', value, { metadata: { updatedAt: value.updatedAt, updatedBy: value.updatedBy } });
      return json(value);
    }
    return new Response('Method not allowed', { status: 405 });
  } catch (error) {
    return handleError(error);
  }
};

export const config = { path: '/api/content' };
