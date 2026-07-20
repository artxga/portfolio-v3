"use client"

import TechTag from "./tech-tag";
import { useLanguage } from "@/context/language-context";
import { experiences } from "@/core/static/experiences";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExperienceItem(props: typeof experiences[number]) {
  const { language } = useLanguage()

  const [company, setCompany] = useState(props.company[language])
  const [roles, setRoles] = useState(props.roles.map(r => ({
    jobTitle: r.jobTitle[language],
    period: r.period[language],
    description: r.description[language],
    tools: r.tools[language]
  })))

  useEffect(() => {
    setCompany(props.company[language])
    setRoles(props.roles.map(r => ({
      jobTitle: r.jobTitle[language],
      period: r.period[language],
      description: r.description[language],
      tools: r.tools[language]
    })))
  }, [language, props.company, props.roles])

  return (
    <div className="flex items-stretch gap-6 md:gap-8">
      <div className="relative flex flex-col items-center w-3">
        <div className="flex-1 w-2 rounded-xs bg-[var(--foreground)] opacity-20"></div>
        <div className="my-2 rounded-full w-9 h-9 bg-[var(--accent)] overflow-hidden border border-[var(--details)] flex-shrink-0">
          <Image src={props.logo.src} alt={props.logo.alt} width={100} height={100} className="w-full h-full" />
        </div>
        <div className="flex-1 w-2 rounded-xs bg-[var(--foreground)] opacity-20"></div>
      </div>
      <div className="flex flex-col gap-6 pb-12 pt-1.5 w-full">
        <div className="flex flex-col gap-8">
          {roles.map((role, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-[var(--foreground)]">
                  {role.jobTitle}
                </span>
                <a className="text-sm font-medium text-[var(--accent)] md:hover:text-[var(--hover)] " href={props.link} target="_blank">
                  {company} | {role.period}
                </a>
              </div>
              <span className="text-sm text-[var(--foreground-paragraph)] opacity-90">
                {role.description}
              </span>
              <div className="flex flex-wrap gap-x-1.5 gap-y-2">
                {role.tools.map((tool, index) => (
                  <TechTag key={index} name={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
