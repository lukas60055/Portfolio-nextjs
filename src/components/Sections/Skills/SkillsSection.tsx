'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useId } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import styles from './skillsSection.module.scss';
import Section from '../Section';
import skillsData from '@/data/skills.json';

export default function SkillsSection() {
  const ID = useId();
  const t = useTranslations('skills');
  const skillsId = useTranslations('navbar');

  return (
    <Section
      id={skillsId('skills')}
      title={t('title')}
      icon={<FaLaptopCode />}
      colorTitle="#fff"
      style={{
        background: 'linear-gradient(to bottom, #57059e, #4a00e0)',
      }}
    >
      <div className={styles.boxSkills}>
        {Object.entries(skillsData).map(([category, skills], index, array) => (
          <div
            key={`${ID}-${category}-${index}`}
            className={index !== array.length - 1 ? 'pb-5' : ''}
          >
            <h2 className="mb-3 ps-md-2 text-white text-center text-md-start">
              {t(category)}
            </h2>
            <div className={styles.categorySkills}>
              {skills.map((skill, index) => (
                <Tilt
                  key={`${ID}-${category}-${index}`}
                  tiltMaxAngleX={14}
                  tiltMaxAngleY={14}
                  scale={1.08}
                  transitionSpeed={1000}
                >
                  <motion.div whileTap={{ scale: 0.9 }} className="h-100">
                    <div className={styles.itemSkill}>
                      <Image
                        src={skill.icon}
                        alt={`Icon skill - ${skill.name}`}
                        width={48}
                        height={48}
                      />
                      <h3 className="mt-3 mb-0 text-white text-center fw-medium">
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
