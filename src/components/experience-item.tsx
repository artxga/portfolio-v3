"use client"

import TechTag from "./tech-tag";
import { useLanguage } from "@/context/language-context";
import { experiences } from "@/core/static/experiences";
import { useEffect, useState } from "react";

export default function ExperienceItem(props: typeof experiences[number]) {

  const { language } = useLanguage()

  const [fields, setFields] = useState<{
    jobTitle: string,
    company: string,
    period: string,
    description: string,
    tools: string[]
  }>({
    jobTitle: props.jobTitle[language],
    company: props.company[language],
    period: props.period[language],
    description: props.description[language],
    tools: props.tools[language]
  })

  useEffect(() => {
    setFields({
      jobTitle: props.jobTitle[language],
      company: props.company[language],
      period: props.period[language],
      description: props.description[language],
      tools: props.tools[language]
    })
  }, [language])

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
            {fields?.jobTitle}
          </span>
          <span className="text-sm font-medium text-[var(--accent)]">
            {fields?.company} | {fields?.period}
          </span>
        </div>
        <span className="text-sm text-[var(--foreground-paragraph)] opacity-90">
          {fields?.description}
        </span>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2">
          {
            fields?.tools.map((tool, index) => (
              <TechTag key={index} name={tool} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
