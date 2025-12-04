export const locales = ['ca', 'es', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ca';

export const localeNames: Record<Locale, string> = {
  ca: 'Català',
  es: 'Español',
  fr: 'Français',
};

