"use client"

import { useLanguage } from "@/context/language-context";
import SectionTitle from "./section-title";
import { aboutData } from "@/core/static/about";

export default function AboutSection() {
  const { language } = useLanguage()
  const { title, paragraphs } = aboutData
  return (
    <section
      id="about"
      className="flex flex-col gap-6 md:gap-8 md:justify-center md:min-h-screen"
    >
      <SectionTitle title={title[language]} />

      <div className="flex flex-col gap-4 text-base leading-relaxed text-[var(--foreground-paragraph)]">
        {paragraphs[language].map((text, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </div>
    </section>
  );
}
