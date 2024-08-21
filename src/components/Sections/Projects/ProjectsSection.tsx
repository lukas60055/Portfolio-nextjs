import { useTranslations } from 'next-intl';
import { useId } from 'react';
import { FaFileCode } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import styles from './projectsSection.module.scss';
import Section from '../Section';
import CardProject from '@/components/CardProject/CardProject';
import NavigationLink from '@/components/NavigationLink/NavigationLink';
import projectsData from '@/data/projects.json';

export default function ProjectsSection() {
  const ID = useId();
  const t = useTranslations('projects');
  const projectsId = useTranslations('navbar');

  const shuffledProjects = [...projectsData].sort(() => 0.5 - Math.random());
  const selectedProjects = shuffledProjects.slice(0, 3);

  return (
    <Section
      id={projectsId('projects')}
      title={t('title')}
      icon={<FaFileCode />}
    >
      <div className="row row-gap-4">
        {selectedProjects.map((project, index) => (
          <div key={`${ID}-${index}`} className="col-12 col-md-6 col-lg-4">
            <CardProject {...project} />
          </div>
        ))}
        <div className="d-flex justify-content-center mt-4">
          <NavigationLink className={styles.projectsLink} href="projects">
            {t('viewMore')} <BiLogInCircle className="ms-3" />
          </NavigationLink>
        </div>
      </div>
    </Section>
  );
}
