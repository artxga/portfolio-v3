"use client"

import { experiences } from "@/core/static/experiences";
import ExperienceItem from "./experience-item";
import SectionTitle from "./section-title";
import { useLanguage } from "@/context/language-context";

export default function ExperienceSection() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="flex flex-col justify-center gap-9 pt-18">
      <SectionTitle title={language === "en" ? "Experience" : "Experiencia"} />
      <div className="flex flex-col ml-3">
        {
          experiences.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))
        }
      </div>
    </section>
  );
}