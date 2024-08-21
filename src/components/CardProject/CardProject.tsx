import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useId } from 'react';
import { FaCode, FaRegEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import styles from './cardProject.module.scss';
import { CardProjectProps } from '@/types/components/CardProject/CardProject';
import { LocalesType } from '@/types/LocalesType';

export default function CardProject(props: CardProjectProps) {
  const ID = useId();
  const locale = useLocale();
  const t = useTranslations('projects');

  return (
    <div className={styles.cardProject}>
      <Image
        src={`/projects/${props.img}`}
        alt={`Project - ${props.translations[locale as LocalesType]}`}
        className="position-relative"
        fill
        sizes="fill"
        placeholder="blur"
        blurDataURL={
          'data:image/jpeg;base64,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'
        }
      />
      <div className={styles.cardOverlay}>
        <div className={styles.cardBody}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            className="position-absolute end-0 bottom-100"
          >
            <path fill="#fff" d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
          </svg>
          <h3 className="mb-3 text-center">
            {props.translations[locale as LocalesType]}
          </h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {props.stack.map((stack, index) => (
              <span key={`${ID}-${index}`} className="badge text-bg-secondary">
                {stack}
              </span>
            ))}
          </div>
          <div className="d-flex w-100 justify-content-around mt-4">
            {props.live ? (
              <a href={props.live} target="_blank">
                {t('viewLive')} <FaRegEye />
              </a>
            ) : (
              <button disabled>
                {t('noPreview')} <IoEyeOff />
              </button>
            )}
            {props.code && (
              <a href={props.code} target="_blank">
                {t('viewCode')} <FaCode />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
