import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll('/', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path;
    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = cycleRoutes(path, currentLang);
    return route;
  }

  return path;
}

function cycleRoutes(path: string, lang: keyof typeof routes): string {
  if (routes[lang] && routes[lang][path]) {
    return routes[lang][path];
  }
  return path;
}

export function getAlternateUrl(url: URL, targetLang: keyof typeof ui): string {
  const currentLang = getLangFromUrl(url);
  const pathname = url.pathname;

  // Handle root path
  if (pathname === '/' || pathname === '') {
    return targetLang === defaultLang ? '/' : `/${targetLang}/`;
  }

  // Remove current language prefix if present
  let cleanPath = pathname;
  if (currentLang !== defaultLang) {
    cleanPath = pathname.replace(`/${currentLang}`, '') || '/';
  }

  // Get the path segment (without leading slash)
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0) {
    return targetLang === defaultLang ? '/' : `/${targetLang}/`;
  }

  // Check if first segment is a translatable route
  const firstSegment = segments[0];

  // Translate the first segment if it's a known route
  if (routes[targetLang] && routes[targetLang][firstSegment]) {
    segments[0] = routes[targetLang][firstSegment];
  }

  const newPath = '/' + segments.join('/');

  if (targetLang === defaultLang) {
    return newPath;
  }

  return `/${targetLang}${newPath}`;
}
