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

  // Skip static assets, API routes, and anything that already has a locale prefix
  if (
    pathname.startsWith('/_') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') // files with extensions
  ) {
    return next();
  }

  // If the path already starts with a known locale, let Astro i18n handle it
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  if (isValidLocale(firstSegment)) {
    // Optionally refresh the cookie so the preference sticks
    cookies.set('lang', firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
      httpOnly: false, // readable by client-side switcher if needed
    });
    return next();
  }

  // Only auto-redirect on the bare root (or other unprefixed pages if you expand later)
  // For a single-page landing we mainly care about `/`
  if (pathname !== '/' && pathname !== '') {
    return next();
  }

  // 1. Cookie
  const cookieLang = cookies.get('lang')?.value;
  if (isValidLocale(cookieLang) && cookieLang !== defaultLocale) {
    return redirect(`/${cookieLang}/`, 302);
  }

  // 2. Browser preference (Accept-Language via Astro)
  if (preferredLocale && isValidLocale(preferredLocale) && preferredLocale !== defaultLocale) {
    cookies.set('lang', preferredLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      httpOnly: false,
    });
    return redirect(`/${preferredLocale}/`, 302);
  }

  // 3. Cloudflare geo fallback
  const country =
    request.headers.get('cf-ipcountry') ||
    // @ts-expect-error Cloudflare runtime
    (request as any).cf?.country ||
    context.locals?.runtime?.cf?.country ||
    null;

  if (country && typeof country === 'string') {
    const geoLocale = countryToLocale[country.toUpperCase()];
    if (geoLocale && geoLocale !== defaultLocale) {
      cookies.set('lang', geoLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        httpOnly: false,
      });
      return redirect(`/${geoLocale}/`, 302);
    }
  }

  // 4. Stay on default locale (English at /)
  return next();
});
