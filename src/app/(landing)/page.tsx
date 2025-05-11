import ExperienceItem from "@/components/experience-item";
import NavItemWithIndicator from "@/components/nav-item-with-indicator";
import ProjectItem from "@/components/project-item";
import SectionTitle from "@/components/section-title";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-12 py-12 gap-5 bg-background-light text-foreground-light min-h-screen px-4 font-[family-name:var(--font-inter)]">
      <div className="col-start-3 col-span-4 ">
        <div className="flex flex-col gap-16 sticky top-1/2 -translate-y-1/2 h-fit" >
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Angel Arteaga</h1>
            <h2 className="text-3xl">Full Stack Developer</h2>
            <p className="text-base text-accent-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <ul className="text-sm uppercase font-bold flex flex-col gap-4">
            <li >
              <NavItemWithIndicator href="#about" name="About" />
            </li>
            <li>
              <NavItemWithIndicator href="#experience" name="Experience" />
            </li>
            <li>
              <NavItemWithIndicator href="#projects" name="Projects" />
            </li>
          </ul>
          <button className="relative group w-fit text-base hover:cursor-pointer">
            <span className="group-hover:text-accent-light group-focus-visible:text-accent-light">
              Download Resume
            </span>
            <span className="group-hover:text-accent-light group-focus-visible:text-accent-light absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-250 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 group-hover:w-full"></span>
          </button>
        </div>
      </div>

      <div className="col-start-7 col-span-4 flex flex-col">
        <section className="h-[calc(100vh-3rem)] flex flex-col justify-end">
          <div className=" h-11/12 bg-slate-200 ">

          </div>
        </section>

        <section id="about" className=" h-screen flex flex-col gap-4 justify-center">
          <SectionTitle title="About" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique autem nemo aspernatur! Odit obcaecati nulla qui impedit officia a recusandae, voluptatum earum aut adipisci expedita, libero sit, dolorem culpa.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique autem nemo aspernatur! Odit obcaecati nulla qui impedit officia a recusandae, voluptatum earum aut adipisci expedita, libero sit, dolorem culpa.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique autem nemo aspernatur! Odit obcaecati nulla qui impedit officia a recusandae, voluptatum earum aut adipisci expedita, libero sit, dolorem culpa.</p>
        </section>

        <section id="experience" className="flex flex-col gap-4 py-18 justify-center">
          <SectionTitle title="Experience" />
          <div className="flex flex-col">
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-4 py-18 justify-center">
          <SectionTitle title="Projects" />
          <div className="flex flex-col gap-16">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </section>
      </div>
    </div>
  );
}
