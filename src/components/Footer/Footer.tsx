import { useTranslations } from 'next-intl';
import { FaHeart } from 'react-icons/fa';
import styles from './footer.module.scss';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.paragraph}>
          {t.rich('footer', {
            icon: () => <FaHeart className="mx-1" />,
          })}{' '}
          <a href="https://github.com/lukas60055" target="_blank">
            Łukasz Duda
          </a>
        </span>
      </div>
    </footer>
  );
}
