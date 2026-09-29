/** Supported locales (must match astro.config.mjs) */
export const locales = ['en', 'ar', 'es', 'fr', 'de', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Display names for language switcher */
export const localeNames: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  nl: 'Nederlands',
};

/**
 * Country code (ISO 3166-1 alpha-2) → preferred locale.
 * Used as fallback when no cookie and no strong Accept-Language match.
 * Keep this conservative — language ≠ location.
 */
export const countryToLocale: Record<string, Locale> = {
  // Arabic-speaking / MENA
  AE: 'ar', // United Arab Emirates
  BH: 'ar', // Bahrain
  DZ: 'ar', // Algeria
  EG: 'ar', // Egypt
  IQ: 'ar', // Iraq
  JO: 'ar', // Jordan
  KW: 'ar', // Kuwait
  LB: 'ar', // Lebanon
  LY: 'ar', // Libya
  MA: 'ar', // Morocco
  MR: 'ar', // Mauritania
  OM: 'ar', // Oman
  PS: 'ar', // Palestine
  QA: 'ar', // Qatar
  SA: 'ar', // Saudi Arabia
  SD: 'ar', // Sudan
  SO: 'ar', // Somalia
  SY: 'ar', // Syria
  TN: 'ar', // Tunisia
  YE: 'ar', // Yemen
  DJ: 'ar', // Djibouti
  KM: 'ar', // Comoros

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
  BE: 'fr',
  LU: 'fr',
  MC: 'fr',

  // German-speaking
  DE: 'de',
  AT: 'de',
  LI: 'de',

  // Dutch-speaking
  NL: 'nl',
  SR: 'nl',

  // CH left to browser preference (de/fr/it)
};

export function isValidLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}