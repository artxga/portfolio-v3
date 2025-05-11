import TechTag from "./tech-tag";

export default function ProjectItem() {
  return (
    <div className="grid grid-cols-4 gap-3 items-center hover:bg-details-light hover:cursor-pointer p-3 rounded-lg transition-all duration-300 motion-reduce:transition-none">
      <div className="col-span-1 h-full rounded-lg bg-accent-light ">

      </div>
      <div className="flex flex-col gap-2 col-span-3">
        <span className="font-bold text-base">SISGEAP App</span>
        <span className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odit voluptatum temporibus quia, ex autem provident voluptates dolore qui sit a eum nisi, possimus,
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