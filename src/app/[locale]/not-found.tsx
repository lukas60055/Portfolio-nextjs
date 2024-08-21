'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '@/styles/notFound.module.scss';
import NavigationLink from '@/components/NavigationLink/NavigationLink';

export default function NotFoundPage() {
  const t = useTranslations('notFound');
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [`404, ${t('pageNotFound')}.`],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className={styles.notFound}>
      <div>
        <span ref={typedElement} className="text-white" />
      </div>
      <NavigationLink href="/" className="mt-4 px-3 rounded-1">
        {t('backToHome')}
      </NavigationLink>
    </div>
  );
}
