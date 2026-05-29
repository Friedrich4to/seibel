export async function onRequest({ request, next }: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Spanish is the default locale and lives at root (no /es/ prefix).
  // Only redirect from "/" — all other paths serve their content directly.
  if (pathname !== "/") {
    return next();
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const browserLang = acceptLanguage.split(",")[0].split("-")[0].trim().toLowerCase();

  if (browserLang === "en") {
    return Response.redirect(`${url.origin}/en`, 302);
  }

  return next();
}