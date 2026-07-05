import { defineMiddleware } from 'astro:middleware';
import { verifyToken, getTokenFromRequest } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
	const url = new URL(context.request.url);

	// /admin itself handles its own auth state (shows login or dashboard)
	const isAdminRoot = url.pathname === '/admin' || url.pathname === '/admin/';
	const isAdminSubRoute = url.pathname.startsWith('/admin/') && !isAdminRoot;

	if (!isAdminSubRoute) {
		return next();
	}

	// Protect /admin/* sub-routes (articles, etc.)
	const token = getTokenFromRequest(context.request);
	if (!token) {
		return context.redirect('/admin');
	}

	const secret = context.locals.runtime?.env?.ADMIN_SECRET_KEY;
	if (!secret) {
		return context.redirect('/admin');
	}

	const valid = await verifyToken(token, secret);
	if (!valid) {
		return context.redirect('/admin');
	}

	return next();
});
