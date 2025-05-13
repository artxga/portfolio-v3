import SectionTitle from "./section-title";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 md:gap-8 md:justify-center md:h-screen"
    >
      <SectionTitle title="About" />

      <div className="flex flex-col gap-4 text-base leading-relaxed text-[var(--foreground-paragraph)]">
        <p>
          Soy un <strong>desarrollador Full Stack</strong> con una visión orientada a <strong>resolver problemas</strong> a través de la <strong>tecnología</strong>. Me apasiona crear <strong>soluciones eficientes</strong> y <strong>escalables</strong> que mejoren la vida de los usuarios y optimicen <strong>procesos</strong>. Siempre busco combinar la <strong>creatividad</strong> con la <strong>ingeniería</strong> para generar resultados tangibles en los proyectos en los que trabajo, independientemente de las herramientas y tecnologías utilizadas.
        </p>

        <p>
          Actualmente, trabajo en <strong>Promart</strong>, donde me encargo de crear funcionalidades para la <strong>tienda virtual B2B</strong> y optimizar sistemas internos que mejoran la <strong>gestión de ventas</strong> y <strong>procesos operativos</strong>. Me especializo en tecnologías como <strong>React</strong>, <strong>Angular</strong>, <strong>Node.js</strong>, <strong>Go</strong>, <strong>Docker</strong>, <strong>AWS</strong> y muchas más. pero mi enfoque siempre está en seleccionar la mejor herramienta para cada desafío, aprendiendo y adaptándome rápidamente a nuevas tecnologías cuando es necesario.
        </p>

        <p>
          A lo largo de mi carrera, he tenido el privilegio de trabajar en proyectos diversos, desde el desarrollo de <strong>plataformas de comercio electrónico personalizadas</strong> hasta la creación de <strong>aplicaciones móviles</strong> para grandes empresas como <strong>Telefónica</strong>. Estas experiencias me han permitido ampliar mis <strong>conocimientos</strong> y perfeccionar mis <strong>habilidades técnicas</strong>, lo que me permite abordar una amplia gama de proyectos con confianza.
        </p>

        <p>
          En mi tiempo libre, me enfoco en explorar <strong>tecnologías emergentes</strong>, profundizar en <strong>herramientas avanzadas</strong> y mantenerme actualizado en las <strong>últimas tendencias del desarrollo</strong>. También disfruto pasar tiempo con mis <strong>gatos</strong> y, por supuesto, jugar a mis <strong>videojuegos favoritos</strong>.
        </p>

      </div>
    </section>
  );
}
