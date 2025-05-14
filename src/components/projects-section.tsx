import { projects } from "@/core/static/projects";
import ProjectItem from "./project-item";
import SectionTitle from "./section-title";

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col justify-center gap-9 pt-18">
      <SectionTitle title="Projects" />
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