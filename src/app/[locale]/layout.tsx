import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { GoogleAnalytics } from '@next/third-parties/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';
import { locales } from '@/config';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: 'Portfolio | Łukasz Duda',
    description: t('description'),
    keywords:
      'Front-end Developer, Web developer, Back-end Developer, Portfolio',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-XP4YSMSH30" />
    </html>
  );
}
