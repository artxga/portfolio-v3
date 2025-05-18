import AboutSection from "@/components/about-section";
import BackgroundBubbles from "@/components/background-bubbles";
import DarkModeToggle from "@/components/dark-mode-toggle";
import ExperienceSection from "@/components/experience-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import LanguageSelector from "@/components/language-selector";
import MobileNavbar from "@/components/mobile-navbar";
import ProjectsSection from "@/components/projects-section";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <MobileNavbar />

      <BackgroundBubbles />

      <div className="grid grid-cols-12 min-h-screen px-6 font-[family-name:var(--font-inter)]">
        <div className="fixed hidden md:flex flex-col items-center gap-4 top-1/2 right-5 -translate-y-1/2 z-30 p-3 rounded-xl bg-[rgba(var(--background-rgb),0.7)] backdrop-blur-sm border border-[var(--details)] shadow-md">
          <LanguageSelector />
          <DarkModeToggle />
        </div>

        <HeroSection />

        <div className="flex flex-col col-start-1 col-end-13 mb-12 md:col-start-7 md:col-end-12 2xl:col-end-11">
          <section className="flex-col justify-center hidden h-screen md:flex">
            <div className="relative overflow-hidden rounded-xl h-5/6 border border-[var(--details)] shadow-md hover:shadow-lg transition-shadow duration-500 group">
              <Image
                src="/portrait.webp"
                alt="portrait"
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </section>

          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <FooterSection />
        </div>
      </div>
    </>
  )
}