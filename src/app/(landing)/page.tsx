"use client"

import AboutSection from "@/components/about-section";
import DarkModeToggle from "@/components/dark-mode-toggle";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import LanguageSelector from "@/components/language-selector";
import ProjectsSection from "@/components/projects-section";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-12 min-h-screen px-6 font-[family-name:var(--font-inter)]">
      <HeroSection />
      <div className="fixed flex flex-col gap-4 bottom-4 right-8">
        <DarkModeToggle />
        <LanguageSelector />
      </div>

      <div className="flex flex-col col-start-1 col-end-13 mb-12 md:col-start-7 md:col-end-12 2xl:col-end-11">
        <section className="flex-col justify-end hidden h-screen md:flex">
          <div className=" h-11/12 bg-slate-200">

          </div>
        </section>

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection />

        <footer className="py-6 text-sm text-left text-[var(--foreground-paragraph)] pt-18">
          <p>Made with ❤️ | Powered by React & Tailwind</p>
        </footer>
      </div>
    </div>
  );
}
