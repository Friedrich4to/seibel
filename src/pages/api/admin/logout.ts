export const prerender = false;

import type { APIContext } from 'astro';
import { clearSessionCookie } from '../../../lib/auth';

export async function POST(_ctx: APIContext) {
	return new Response(null, {
		status: 302,
		headers: {
			'Set-Cookie': clearSessionCookie(),
			'Location': '/admin',
		},
	});
}
