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
        <div className="fixed flex-col hidden gap-5 md:flex bottom-5 right-8">
          <DarkModeToggle />
          <LanguageSelector />
        </div>

        <HeroSection />

        <div className="flex flex-col col-start-1 col-end-13 mb-12 md:col-start-7 md:col-end-12 2xl:col-end-11">
          <section className="flex-col justify-center hidden h-screen md:flex">
            <div
              className="overflow-hidden rounded-lg h-9/12"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              }}
            >
              <Image
                src="/portrait.jpg"
                alt="portrait"
                width={500}
                height={500}
                className="object-cover w-full h-full"
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