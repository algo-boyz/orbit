/** Supported locales (must match astro.config.mjs) */
export const locales = ['en', 'es', 'fr', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Display names for language switcher */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
};

/**
 * Country code (ISO 3166-1 alpha-2) → preferred locale.
 * Used as fallback when no cookie and no strong Accept-Language match.
 * Keep this conservative — language ≠ location.
 */
export const countryToLocale: Record<string, Locale> = {
  // Spanish-speaking
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  CL: 'es',
  PE: 'es',
  VE: 'es',
  EC: 'es',
  GT: 'es',
  CU: 'es',
  BO: 'es',
  DO: 'es',
  HN: 'es',
  PY: 'es',
  SV: 'es',
  NI: 'es',
  CR: 'es',
  PA: 'es',
  UY: 'es',
  // French-speaking
  FR: 'fr',
  BE: 'fr', // bilingual, default to fr for simplicity
  LU: 'fr',
  MC: 'fr',
  // German-speaking
  DE: 'de',
  AT: 'de',
  LI: 'de',
  // CH left to browser preference (de/fr/it)
};

export function isValidLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
