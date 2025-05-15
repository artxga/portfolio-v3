"use client";

import AboutSection from "@/components/about-section";
import DarkModeToggle from "@/components/dark-mode-toggle";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import LanguageSelector from "@/components/language-selector";
import MobileNavbar from "@/components/mobile-navbar";
import ProjectsSection from "@/components/projects-section";

export default function LandingPage() {
  return (
    <>
      <MobileNavbar />

      <div className="fixed inset-0 overflow-hidden -z-10">
        <div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: "6s", backgroundColor: "var(--accent)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] rounded-full blur-2xl opacity-20 animate-pulse delay-1000"
          style={{ animationDuration: "6s", backgroundColor: "var(--foreground-paragraph)" }}
        />
        <div
          className="absolute bottom-[-50px] right-[-50px] w-[250px] h-[250px] rounded-full blur-2xl opacity-30 animate-pulse delay-2000"
          style={{ animationDuration: "6s", backgroundColor: "var(--hover)" }}
        />
      </div>



      <div className="grid grid-cols-12 min-h-screen px-6 font-[family-name:var(--font-inter)]">
        <div className="fixed flex-col hidden gap-5 md:flex bottom-5 right-8">
          <DarkModeToggle />
          <LanguageSelector />
        </div>

        <HeroSection />

        <div className="flex flex-col col-start-1 col-end-13 mb-12 md:col-start-7 md:col-end-12 2xl:col-end-11">
          <section className="flex-col justify-center hidden h-screen md:flex">
            <div className="h-10/12 bg-slate-200"></div>
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
