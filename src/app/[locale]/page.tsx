import Header from '@/components/Header/Header';
import SkillsSection from '@/components/Sections/Skills/SkillsSection';
import ProjectsSection from '@/components/Sections/Projects/ProjectsSection';
import ContactSection from '@/components/Sections/Contact/ContactSection';

export default async function PageHome() {
  return (
    <>
      <Header />
      <main>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
