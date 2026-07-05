const COOKIE_NAME = 'admin_session';

export async function generateToken(secret: string): Promise<string> {
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);
	const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode('admin-session'));
	return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

export async function verifyToken(token: string, secret: string): Promise<boolean> {
	if (!token || !secret) return false;
	const expected = await generateToken(secret);
	return token === expected;
}

export function getSessionCookie(token: string): string {
	return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`;
}

export function clearSessionCookie(): string {
	return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

export function getTokenFromRequest(request: Request): string | null {
	const cookie = request.headers.get('cookie') ?? '';
	const match = cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
	return match ? match[1] : null;
}
