'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import Typed from 'typed.js';
import { FaArrowCircleDown, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './header.module.scss';
import Particles from '@/components/Particles/Particles';
import imgHero from '@/assets/img/hero.png';

export default function Header() {
  const typedElement = useRef(null);
  const t = useTranslations('header');

  const scrollToSkills = () => {
    const firstSection = document.querySelectorAll('section')[0];

    firstSection.scrollIntoView();
  };

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Front-End Developer', 'Web Developer', 'Back-End Developer'],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header id="home" className={styles.header}>
      <Particles />
      <div className="container z-1">
        <div className="row row-gap-5 align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <h2 className="fw-bolder">
                {t.rich('greeting', {
                  br: () => <br />,
                  strong: (value) => <strong>{value}</strong>,
                  span: (value) => <span>{value}</span>,
                })}
              </h2>
              <p className="mb-4 fw-semibold">
                {t('profession')} <span ref={typedElement} />
              </p>
              <button
                className="d-flex align-items-center lh-1"
                onClick={scrollToSkills}
              >
                {t('cta')}
                <FaArrowCircleDown className="ms-3" />
              </button>
              <div className={styles.links}>
                <a href="https://github.com/lukas60055" target="_blank">
                  <FaGithub />
                </a>
                <a href="mailto:kontakt@lukaspro.pl">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.07}>
              <Image
                src={imgHero}
                alt="Hero"
                className="img-fluid"
                priority={true}
              />
            </Tilt>
          </div>
        </div>
      </div>
    </header>
  );
}
