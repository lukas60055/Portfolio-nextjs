import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const host =
  process.env.NODE_ENV === 'production'
    ? `https://www.lukaspro.pl`
    : `http://localhost:3000`;
export const defaultLocale = 'en' as const;
export const locales = ['en', 'pl'] as const;
export const localePrefix: LocalePrefix<typeof locales> = 'as-needed';
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/#skills': {
    en: '/#skills',
    pl: '/#umiejetnosci',
  },
  '/#projects': {
    en: '/#projects',
    pl: '/#projekty',
  },
  '/#contact': {
    en: '/#contact',
    pl: '/#kontakt',
  },
  '/projects': {
    en: '/projects',
    pl: '/projekty',
  },
};
