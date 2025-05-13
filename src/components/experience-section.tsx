import ExperienceItem from "./experience-item";
import SectionTitle from "./section-title";

export default function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col justify-center gap-9 pt-18">
      <SectionTitle title="Experience" />
      <div className="flex flex-col ml-3">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
}