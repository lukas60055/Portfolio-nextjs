import { useTranslations } from 'next-intl';
import { useId } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import styles from '@/styles/projects.module.scss';
import CardProject from '@/components/CardProject/CardProject';
import projectsData from '@/data/projects.json';
import Section from '@/components/Sections/Section';

export default function PageProjects() {
  const ID = useId();
  const t = useTranslations('projects');

  return (
    <main>
      <Section
        icon={<FaLaptopCode />}
        title={t.rich('heading', {
          span: (value) => <span>{value}</span>,
        })}
        colorTitle="#FFF"
        className={styles.projects}
      >
        <div className="row">
          {projectsData.map((project, index) => (
            <div
              key={`${ID}-${index}`}
              className="col-12 col-md-6 col-lg-4 mb-5"
            >
              <CardProject {...project} />
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
