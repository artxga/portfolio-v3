import TechTag from "./tech-tag";

export default function ExperienceItem() {
  return (
    <div className="flex items-stretch gap-9">
      <div className="relative w-3 bg-foreground-light">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.625rem] h-[2.625rem] rounded-full bg-accent-light"></div>
      </div>
      <div className="flex flex-col gap-2 my-8">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg ">Full Stack Developer</span>
          <span className="font-bold text-base text-accent-light">Promart | Aug 2024 - Present</span>
        </div>
        <span className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odit voluptatum temporibus quia, ex autem provident voluptates dolore qui sit a eum nisi, possimus, unde ducimus exercitationem recusandae ipsa sunt!
        </span>
        <div className="flex flex-wrap gap-2">
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