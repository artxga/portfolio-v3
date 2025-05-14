"use client"

import AboutSection from "@/components/about-section";
import DarkModeToggle from "@/components/dark-mode-toggle";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import LanguageSelector from "@/components/language-selector";
import ProjectsSection from "@/components/projects-section";

export default function LandingPage() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full md:hidden h-16 bg-[var(--background)]-80 backdrop-blur-xl">
        <div className="flex items-center justify-end h-full gap-4 px-6 ">
          <DarkModeToggle />
          <LanguageSelector />
        </div>
      </nav>
      <div className="grid grid-cols-12 min-h-screen px-6 font-[family-name:var(--font-inter)]">

        <div className="fixed flex-col hidden gap-5 md:flex bottom-5 right-8">
          <DarkModeToggle />
          <LanguageSelector />
        </div>

        <HeroSection />

        <div className="flex flex-col col-start-1 col-end-13 mb-12 md:col-start-7 md:col-end-12 2xl:col-end-11">
          <section className="flex-col justify-center hidden h-screen md:flex">
            <div className=" h-10/12 bg-slate-200">

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
    </>
  );
}
