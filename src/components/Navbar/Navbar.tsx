'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useId } from 'react';
import { FaNodeJs } from 'react-icons/fa';
import styles from './navbar.module.scss';
import { usePathname, useRouter } from '@/navigation';
import NavigationLink from '@/components/NavigationLink/NavigationLink';
import { LocalesType } from '@/types/LocalesType';
import { removePolishCharacters } from '@/utils/removePolishCharacters';

export default function Navbar() {
  const ID = useId();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navbar');

  const itemsLink = [
    { translation: 'home', href: '/' },
    { translation: 'skills', href: '/#skills' },
    { translation: 'projects', href: '/#projects' },
    { translation: 'contact', href: '/#contact' },
  ];

  const onChangeLanguage = (locale: LocalesType) => {
    router.replace(pathname, { locale });
  };

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <NavigationLink
        href="/"
        className="navbar-brand d-flex align-items-center"
      >
        <FaNodeJs className="me-2" color="green" size={28} />
        <h1 className="m-0 fs-3">Łukasz Duda</h1>
      </NavigationLink>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#collapseNavbar"
        aria-controls="collapseNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        id="collapseNavbar"
        className="position-relative collapse navbar-collapse flex-lg-grow-0 mt-3 mt-lg-0"
      >
        <ul className="navbar-nav align-items-center column-gap-3">
          {itemsLink.map((link, index) => (
            <li key={`${ID}-${index}`} className="nav-item">
              <NavigationLink
                href={removePolishCharacters(link.href)}
                className={`${styles.navbar__link} nav-link`}
              >
                {t(link.translation)}
              </NavigationLink>
            </li>
          ))}
          <li
            className={`${styles.navbar__flag} nav-item d-flex ms-lg-3 pt-3 pt-lg-0`}
          >
            <input
              type="image"
              src="/flags/en.svg"
              onClick={() => onChangeLanguage('en')}
            />
            <input
              type="image"
              src="/flags/pl.svg"
              onClick={() => onChangeLanguage('pl')}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
