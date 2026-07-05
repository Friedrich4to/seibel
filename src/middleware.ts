import { defineMiddleware } from 'astro:middleware';
import { getTokenFromRequest } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
	const url = new URL(context.request.url);
	const isAdminRoot = url.pathname === '/admin' || url.pathname === '/admin/';
	const isAdminSubRoute = url.pathname.startsWith('/admin/') && !isAdminRoot;

	if (!isAdminSubRoute) return next();

	// First-pass: just check the cookie exists; pages do full HMAC verification
	const token = getTokenFromRequest(context.request);
	if (!token) {
		return context.redirect('/admin');
	}

	return next();
});
