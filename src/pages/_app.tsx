import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.querySelector('#LoadingIcon') as HTMLDivElement;
      loader ? loader.remove() : null;
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio | Łukasz Duda</title>
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  );
}
