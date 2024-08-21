import styles from './section.module.scss';
import { SectionProps } from '@/types/components/Sections/Section';
import { removePolishCharacters } from '@/utils/removePolishCharacters';

export default function Section(props: SectionProps) {
  const styleSection = props.style ? props.style : {};
  const colorTitle = props.colorTitle ? { color: props.colorTitle } : {};

  return (
    <section
      id={props.id ? removePolishCharacters(props.id).toLowerCase() : undefined}
      style={styleSection}
      className={`${styles.section} ${props.className ? props.className : ''}`}
    >
      <h2
        style={colorTitle}
        className="d-flex flex-wrap justify-content-center align-items-center column-gap-3 fw-bold"
      >
        {props.icon} {props.title}
      </h2>
      <div className="container">{props.children}</div>
    </section>
  );
}
