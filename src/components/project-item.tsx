import TechTag from "./tech-tag";

export default function ProjectItem() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] transition-all duration-300 ease-in-out rounded-lg md:gap-3 md:grid-rows-1 md:grid-cols-8 hover:bg-[var(--details)] hover:cursor-pointer md:p-3 motion-reduce:transition-none">
      <div className="row-start-2 row-end-3 mt-3 w-[200px] md:w-full rounded-lg md:row-start-1 md:row-end-2 md:col-span-3 aspect-video bg-[var(--accent)] md:mt-0">
        {/* Imagen o preview del proyecto */}
      </div>
      <div className="flex flex-col col-span-5 gap-3">
        <h3 className="text-base font-medium text-[var(--foreground)]">
          SISGEAP App
        </h3>
        <span className="text-sm text-[var(--foreground-paragraph)] opacity-80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odit voluptatum temporibus quia, ex autem provident voluptates dolore qui sit a eum nisi, possimus,
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
