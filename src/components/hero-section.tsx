"use client"

import NavItemWithIndicator from "./nav-item-with-indicator";
import { useLanguage } from "@/context/language-context";
import { heroData } from "@/core/static/hero";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import SocialBar from "./social-bar";

export default function HeroSection() {
  const { language } = useLanguage()
  const sectionIds = heroData.navLinks.map((link) => link.id)
  const currentSection = useScrollSpy(sectionIds)

  return (
    <div className="top-0 flex flex-col justify-center h-screen col-start-1 col-end-13 md:sticky md:col-start-2 md:col-span-4 2xl:col-span-3 2xl:col-start-3">
      <div className="flex flex-col gap-16 h-fit">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold md:text-5xl text-[var(--foreground)]">
            {heroData.name}
          </h1>
          <h2 className="text-xl font-medium md:text-2xl text-[var(--foreground)]">
            {heroData.role[language]}
          </h2>
          <p className="text-base text-[var(--foreground-paragraph)]">
            {heroData.description[language]} </p>
        </div>

        <ul className="md:flex hidden flex-col gap-4 text-sm font-bold uppercase text-[var(--foreground)]">
          {heroData.navLinks.map((link) => (
            <li key={link.id}>
              <NavItemWithIndicator href={`#${link.id}`} name={link.label[language]} isActive={currentSection === link.id} />
            </li>
          ))}
        </ul>

        <a className="relative w-fit group text-sm font-medium uppercase text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
          href={heroData.resume[language].file}
          download
          target="_blank"
          rel="noopener noreferrer">
          {heroData.resume[language].description}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-focus-visible:w-full"></span>
        </a>

        <SocialBar />
      </div>
    </div>
  );
}
