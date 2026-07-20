"use client"

import { useLanguage } from "@/context/language-context";
import { certifications } from "@/core/static/certifications";
import { useEffect, useState } from "react";

export default function CertificationItem(props: typeof certifications[number]) {
  const { language } = useLanguage()

  const [fields, setFields] = useState<{
    title: string,
    date: string
  }>({
    title: props.title[language],
    date: props.date[language]
  })

  useEffect(() => {
    setFields({
      title: props.title[language],
      date: props.date[language]
    })
  }, [language, props.title, props.date])

  return (
    <div className="flex flex-col gap-2 p-5 rounded-xl border border-[var(--details)] bg-[rgba(var(--background-rgb),0.5)] hover:bg-[rgba(var(--details-rgb),0.1)] transition-colors duration-300">
      <h3 className="text-base font-medium text-[var(--foreground)] leading-tight">
        {fields.title}
      </h3>
      <div className="flex items-center justify-between mt-1 text-sm text-[var(--foreground-paragraph)] opacity-90">
        <span className="font-medium text-[var(--accent)]">{props.issuer}</span>
        <span>{fields.date}</span>
      </div>
    </div>
  );
}
