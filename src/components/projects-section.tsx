"use client"

import { projects } from "@/core/static/projects";
import ProjectItem from "./project-item";
import SectionTitle from "./section-title";
import { useLanguage } from "@/context/language-context";

export default function ProjectsSection() {
  const { language } = useLanguage()

  return (
    <section id="projects" className="flex flex-col justify-center gap-9 pt-18">
      <SectionTitle title={language === "en" ? "Projects" : "Proyectos"} />
      <div className="flex flex-col gap-12">
        {
          projects.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))
        }
      </div>
    </section>
  );
}