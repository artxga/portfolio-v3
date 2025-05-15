"use client"

import { projects } from "@/core/static/projects";
import TechTag from "./tech-tag";
import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";

export default function ProjectItem(props: typeof projects[number]) {

  const { language } = useLanguage()

  const [fields, setFields] = useState<{
    title: string,
    description: string,
    techStack: string[]
  }>({
    title: props.title[language],
    description: props.description[language],
    techStack: props.techStack
  })


  useEffect(() => {
    setFields({
      title: props.title[language],
      description: props.description[language],
      techStack: props.techStack
    })
  }, [language])

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] transition-all duration-300 ease-in-out rounded-lg md:gap-3 md:grid-rows-1 md:grid-cols-8 md:hover:bg-[rgba(var(--details-rgb),0.3)] md:hover:backdrop-blur-xl hover:cursor-pointer md:p-3 motion-reduce:transition-none">
      <div className="row-start-2 row-end-3 mt-3 w-[200px] md:w-full rounded-lg md:row-start-1 md:row-end-2 md:col-span-3 aspect-video bg-[var(--accent)] md:mt-0">
      </div>
      <div className="flex flex-col col-span-5 gap-3">
        <h3 className="text-base font-medium text-[var(--foreground)]">
          {fields.title}
        </h3>
        <span className="text-sm text-[var(--foreground-paragraph)] opacity-80">
          {fields.description}
        </span>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2">
          {
            fields.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
