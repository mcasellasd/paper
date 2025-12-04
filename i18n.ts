export type Locale = 'ca' | 'es' | 'fr';

export const locales: Locale[] = ['ca', 'es', 'fr'];
export const defaultLocale: Locale = 'ca';

export const localeNames: Record<Locale, string> = {
  ca: 'Català',
  es: 'Español',
  fr: 'Français',
};

