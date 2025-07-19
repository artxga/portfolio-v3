"use client"

import { projects } from "@/core/static/projects";
import TechTag from "./tech-tag";
import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import Image from "next/image";
import useIsSmallScreen from "@/hooks/use-is-small-screen";

export default function ProjectItem(props: typeof projects[number]) {

  const { language } = useLanguage()
  const isSmall = useIsSmallScreen()

  const [fields, setFields] = useState({
    title: props.title[language],
    description: props.description[language],
  })

  useEffect(() => {
    setFields({
      title: props.title[language],
      description: props.description[language],
    })
  }, [language])

  const Wrapper = props.link && !isSmall
    ? ({ children }: { children: React.ReactNode }) => (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </a>
    )
    : ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

  return (
    <Wrapper>
      <div className="group grid grid-cols-1 grid-rows-[auto_1fr] transition-all duration-300 ease-in-out rounded-lg md:gap-3 md:grid-rows-1 md:grid-cols-8 md:hover:bg-[rgba(var(--details-rgb),0.3)] md:hover:backdrop-blur-sm md:hover:cursor-pointer md:p-3 motion-reduce:transition-none md:hover:shadow-sm">

        <div className="row-start-2 overflow-hidden row-end-3 mt-3 w-[200px] md:w-full rounded-lg md:row-start-1 md:row-end-2 md:col-span-3 aspect-video bg-[var(--accent)] md:mt-0 border border-[var(--details)] transition-transform duration-300 md:group-hover:scale-[1.015]">
          <Image
            src={props.img.src}
            alt={props.img.alt}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col col-span-5 gap-3 transition-colors duration-300">

          {props.link && isSmall ? (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <h3 className="text-base font-medium text-[var(--foreground)] md:group-hover:text-[var(--accent)]">
                {fields.title}
              </h3>
            </a>
          ) : (
            <h3 className="text-base font-medium text-[var(--foreground)] md:group-hover:text-[var(--accent)]">
              {fields.title}
            </h3>
          )}

          <span className="text-sm text-[var(--foreground-paragraph)] opacity-90 md:group-hover:opacity-100">
            {fields.description}
          </span>

          <div className="flex flex-wrap gap-x-1.5 gap-y-2">
            {props.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
