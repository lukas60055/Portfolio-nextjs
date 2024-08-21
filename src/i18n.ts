import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';
import { LocalesType } from './types/LocalesType';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as LocalesType)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
