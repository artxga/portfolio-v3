import { useLanguage } from "@/context/language-context";
import ExperienceItem from "./experience-item";
import SectionTitle from "./section-title";

export default function ExperienceSection() {
  const { language } = useLanguage()
  return (
    <section id="experience" className="flex flex-col justify-center gap-9 pt-18">
      <SectionTitle title="Experience" />
      <p>{language}</p>
      <div className="flex flex-col ml-3">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
}