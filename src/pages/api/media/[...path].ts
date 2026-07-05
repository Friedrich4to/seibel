export const prerender = false;

import type { APIContext } from 'astro';

export async function GET({ params, locals }: APIContext) {
	const key = params.path;
	if (!key) return new Response('Not found', { status: 404 });

	const bucket: R2Bucket = locals.runtime.env.BUCKET;
	const object = await bucket.get(key);

	if (!object) return new Response('Not found', { status: 404 });

	const headers = new Headers();
	headers.set('Content-Type', object.httpMetadata?.contentType ?? 'application/octet-stream');
	headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	if (object.size) headers.set('Content-Length', String(object.size));

	return new Response(object.body, { headers });
}
