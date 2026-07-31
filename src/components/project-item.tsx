"use client"

import { projects } from "@/core/static/projects";
import TechTag from "./tech-tag";
import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import Image from "next/image";
import useIsSmallScreen from "@/hooks/use-is-small-screen";

type CategoryKey = "Profesional" | "Professional" | "Client" | "Cliente" | "Personal" | string;

function getCategoryStyle(category: CategoryKey) {
  if (category === "Profesional" || category === "Professional") {
    return "bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)]";
  }
  if (category === "Client" || category === "Cliente") {
    return "bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)]";
  }
  return "bg-[rgba(var(--details-rgb),0.5)] text-[var(--foreground-paragraph)] border border-[var(--details)]";
}

export default function ProjectItem(props: typeof projects[number]) {

  const { language } = useLanguage()
  const isSmall = useIsSmallScreen()

  const [fields, setFields] = useState({
    title: props.title[language],
    description: props.description[language],
    client: props.client ? props.client[language] : undefined,
    category: props.category ? props.category[language] : undefined,
  })

  useEffect(() => {
    setFields({
      title: props.title[language],
      description: props.description[language],
      client: props.client ? props.client[language] : undefined,
      category: props.category ? props.category[language] : undefined,
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
      <div className="group grid grid-cols-1 transition-all duration-300 ease-in-out rounded-xl md:gap-4 md:grid-cols-8 md:hover:bg-[rgba(var(--details-rgb),0.3)] md:hover:backdrop-blur-sm md:hover:cursor-pointer md:p-4 motion-reduce:transition-none md:hover:shadow-md gap-y-3">

        {/* Image */}
        <div className="overflow-hidden mt-3 w-[200px] md:w-full rounded-lg md:col-span-3 aspect-video bg-[var(--accent)] md:mt-0 border border-[var(--details)] transition-transform duration-300 md:group-hover:scale-[1.015] shrink-0">
          <Image
            src={props.img.src}
            alt={props.img.alt}
            width={400}
            height={225}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col col-span-5 gap-2.5 transition-colors duration-300">

          {/* Header: title + category badge */}
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between gap-3">
              {props.link && isSmall ? (
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <h3 className="text-base font-semibold text-[var(--foreground)] md:group-hover:text-[var(--accent)] transition-colors duration-200 leading-snug">
                    {fields.title}
                  </h3>
                </a>
              ) : (
                <h3 className="text-base font-semibold text-[var(--foreground)] md:group-hover:text-[var(--accent)] transition-colors duration-200 leading-snug">
                  {fields.title}
                </h3>
              )}

              {fields.category && (
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-0.5 ${getCategoryStyle(fields.category)}`}>
                  {fields.category}
                </span>
              )}
            </div>

            {/* Client line */}
            {fields.client && (
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-[var(--foreground-paragraph)] opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="text-xs text-[var(--foreground-paragraph)] opacity-70 italic">
                  {fields.client}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--foreground-paragraph)] opacity-90 md:group-hover:opacity-100 leading-relaxed transition-opacity duration-200">
            {fields.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-x-1.5 gap-y-2 mt-auto pt-0.5">
            {props.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </div>

      </div>
    </Wrapper>
  );
}
