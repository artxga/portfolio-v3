import TechTag from "./tech-tag";

export default function ExperienceItem() {
  return (
    <div className="flex items-stretch gap-8">
      <div className="relative flex flex-col items-center w-3">
        <div className="flex-1 w-2 rounded-xs bg-[var(--foreground)] opacity-20"></div>
        <div className="my-2 rounded-full w-9 h-9 bg-[var(--accent)]"></div>
        <div className="flex-1 w-2 rounded-xs bg-[var(--foreground)] opacity-20"></div>
      </div>
      <div className="flex flex-col gap-3 pb-12">
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-[var(--foreground)]">
            Full Stack Developer
          </span>
          <span className="text-sm font-medium text-[var(--accent)]">
            Promart | Aug 2024 - Present
          </span>
        </div>
        <span className="text-sm text-[var(--foreground-paragraph)] opacity-90">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odit voluptatum temporibus quia, ex autem provident voluptates dolore qui sit a eum nisi, possimus, unde ducimus exercitationem recusandae ipsa sunt!
        </span>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2">
          <TechTag name="React" />
          <TechTag name="Next.js" />
          <TechTag name="Node.js" />
          <TechTag name="Tailwind" />
          <TechTag name="MongoDB" />
          <TechTag name="Typescript" />
          <TechTag name="GraphQL" />
          <TechTag name="Prisma" />
          <TechTag name="AWS" />
          <TechTag name="Docker" />
          <TechTag name="Kubernetes" />
          <TechTag name="Git" />
        </div>
      </div>
    </div>
  );
}
