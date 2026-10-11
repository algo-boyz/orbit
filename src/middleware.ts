import { defineMiddleware } from 'astro:middleware';
import { defaultLocale, isValidLocale, countryToLocale } from './i18n/config';

/**
 * Locale detection priority:
 * 1. Explicit locale prefix in the URL (Astro handles this via i18n routing)
 * 2. Cookie `lang` (user's previous explicit choice)
 * 3. Astro.preferredLocale (from Accept-Language header)
 * 4. Cloudflare geo (CF-IPCountry / request.cf.country)
 * 5. defaultLocale
 *
 * On the root path `/` we redirect non-default locales so users land on
 * the correct language version. Prefixed routes (/es/, /fr/, …) are left alone.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, request, preferredLocale, redirect } = context;
  const pathname = url.pathname;

  // Skip static assets, API, files
  if (
    pathname.startsWith('/_') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return next();
  }

  const firstSegment = pathname.split('/').filter(Boolean)[0];

  // Prefixed route → treat as explicit choice and remember it
  if (isValidLocale(firstSegment)) {
    cookies.set('lang', firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      httpOnly: false,
      secure: true, // HTTPS
    });
    return next();
  }

  // Only auto-redirect the bare root
  if (pathname !== '/' && pathname !== '') {
    return next();
  }

  // 1. Explicit cookie (switcher or previous prefixed visit) — highest priority
  const cookieLang = cookies.get('lang')?.value;
  if (isValidLocale(cookieLang)) {
    if (cookieLang === defaultLocale) {
      return next(); // stay on /
    }
    return redirect(`/${cookieLang}/`, 302);
  }

  // 2. Browser preference — redirect only, do NOT set a permanent cookie
  if (preferredLocale && isValidLocale(preferredLocale) && preferredLocale !== defaultLocale) {
    return redirect(`/${preferredLocale}/`, 302);
  }

  // 3. Cloudflare geo — redirect only, do NOT set a permanent cookie
  const country =
    request.headers.get('cf-ipcountry') ||
    // @ts-expect-error Cloudflare runtime
    (request as any).cf?.country ||
    context.locals?.runtime?.cf?.country ||
    null;

  if (country && typeof country === 'string') {
    const geoLocale = countryToLocale[country.toUpperCase()];
    if (geoLocale && geoLocale !== defaultLocale) {
      return redirect(`/${geoLocale}/`, 302);
    }
  }

  // 4. Default English
  return next();
});