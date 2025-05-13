import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import NavItemWithIndicator from "./nav-item-with-indicator";

export default function HeroSection() {
  return (
    <div className="top-0 flex flex-col justify-center h-screen col-start-1 col-end-13 md:sticky md:col-start-2 md:col-span-4 2xl:col-start-3">
      <div className="flex flex-col gap-16 h-fit">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold md:text-5xl text-[var(--foreground)]">
            Angel Arteaga
          </h1>
          <h2 className="text-xl font-medium md:text-2xl text-[var(--foreground)]">
            Full Stack Developer
          </h2>
          <p className="text-base text-[var(--foreground-paragraph)]">
            I build impactful, scalable tech solutions that solve real-world problems.          </p>
        </div>

        <ul className="flex flex-col gap-4 text-sm font-bold uppercase text-[var(--foreground)]">
          <li>
            <NavItemWithIndicator href="#about" name="About" />
          </li>
          <li>
            <NavItemWithIndicator href="#experience" name="Experience" />
          </li>
          <li>
            <NavItemWithIndicator href="#projects" name="Projects" />
          </li>
        </ul>

        <button className="relative w-fit group text-sm font-medium uppercase text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]">
          Download Resume
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-focus-visible:w-full"></span>
        </button>

        <div className="flex gap-4">
          {[Instagram, Linkedin, Github, Mail].map((Icon, idx) => (
            <button
              key={idx}
              className="text-[var(--foreground)] transition-transform duration-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)] hover:scale-110 focus-visible:scale-110"
            >
              <Icon size={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
