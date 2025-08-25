import SupportedLanguages from "../types/supported-languages";

export interface ExperienceData {
  jobTitle: Record<SupportedLanguages, string>;
  company: Record<SupportedLanguages, string>;
  period: Record<SupportedLanguages, string>;
  description: Record<SupportedLanguages, string>;
  tools: Record<SupportedLanguages, string[]>;
  logo: {
    src: string;
    alt: string;
  };
  link: string;
}

export const experiences: ExperienceData[] = [
  {
    jobTitle: {
      en: "Software Engineer",
      es: "Software Engineer",
    },
    company: {
      en: "NTT DATA - Prima AFP (Systems Management)",
      es: "NTT DATA - Prima AFP (Gerencia de Sistemas)",
    },
    period: {
      en: "August 2025 - Present",
      es: "Agosto 2025 - Actualidad",
    },
    description: {
      en: "Currently working on a project focused on optimizing the performance of a system used for the management of the AFP system.",
      es: "Actualmente trabajando en un proyecto enfocado en optimizar el rendimiento de un sistema utilizado para la gestión de clientes de la AFP.",
    },
    tools: {
      en: ["Node", "React", "Next.js", "TypeScript", "Azure"],
      es: ["Node", "React", "Next.js", "TypeScript", "Azure"],
    },
    logo: {
      src: "/experiences/ntt_data_logo.jpg",
      alt: "NTT DATA Logo",
    },
    link: "https://www.nttdata.com/",
  },
  {
    jobTitle: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    company: {
      en: "Promart (Corporate Sales Management)",
      es: "Promart (Gerencia Vta. Corporativa)",
    },
    period: {
      en: "August 2024 - August 2025",
      es: "Agosto 2024 - Agosto 2025",
    },
    description: {
      en: "Developed features for a B2B e-commerce platform, focusing on personalized bulk purchases for corporate clients. Maintained and improved a custom internal CRM to support sales operations across online and in-store channels. Worked on microservice-based systems and integrated with third-party services to ensure reliable and synchronized data flow.",
      es: "Desarrollé funcionalidades para una plataforma e-commerce B2B, enfocadas en compras masivas personalizadas para clientes corporativos. Di mantenimiento y mejoras a un CRM interno personalizado que respaldaba operaciones de ventas en línea y en tienda. Trabajé con sistemas basados en microservicios e integraciones con servicios externos para asegurar un flujo de datos sincronizado y confiable.",
    },
    tools: {
      en: [
        "React",
        "Vue",
        "Node.js",
        "PHP",
        "Python",
        "Go",
        "Java",
        "Docker",
        "MySQL",
        "GCP",
        "AWS",
      ],
      es: [
        "React",
        "Vue",
        "Node.js",
        "PHP",
        "Python",
        "Go",
        "Java",
        "Docker",
        "MySQL",
        "GCP",
        "AWS",
      ],
    },
    logo: {
      src: "/experiences/promart_logo.jpg",
      alt: "Promart Logo",
    },
    link: "https://www.promart.pe/",
  },
  {
    jobTitle: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    company: {
      en: "Avatar Global",
      es: "Avatar Global",
    },
    period: {
      en: "May 2023 – August 2024",
      es: "Mayo 2023 – Agosto 2024",
    },
    description: {
      en: "Built custom e-commerce solutions for clients in various countries, aligned with specific business requirements. Developed scalable microservices using Java and Node.js to support inventory management and transactional flows. Contributed to the configuration of development and production environments, enhancing team collaboration and deployment stability.",
      es: "Construí soluciones e-commerce personalizadas para clientes en distintos países, alineadas a requerimientos específicos del negocio. Desarrollé microservicios escalables con Java y Node.js para respaldar la gestión de inventario y flujos transaccionales. Contribuí a la configuración de entornos de desarrollo y producción, mejorando la colaboración entre equipos y la estabilidad en despliegues.",
    },
    tools: {
      en: [
        "React",
        "Node.js",
        "NestJS",
        "Java",
        "Docker",
        "SQL",
        "Salesforce B2B",
        "HCL Commerce",
        "AWS",
      ],
      es: [
        "React",
        "Node.js",
        "NestJS",
        "Java",
        "Docker",
        "SQL",
        "Salesforce B2B",
        "HCL Commerce",
        "AWS",
      ],
    },
    logo: {
      src: "/experiences/avatar_global_logo.jpg",
      alt: "Avatar Global Logo",
    },
    link: "https://www.avatar-global.com/",
  },
  {
    jobTitle: {
      en: "Junior Engineer",
      es: "Junior Engineer",
    },
    company: {
      en: "NTT DATA - Telefónica (Tren E-Care)",
      es: "NTT DATA - Telefónica (Tren E-Care)",
    },
    period: {
      en: "August 2022 – May 2023",
      es: "Agosto 2022 – Mayo 2023",
    },
    description: {
      en: "Developed mobile applications for customer service management using Angular and Ionic. Integrated frontend components with Telefónica’s internal systems through APIs, ensuring efficient access to critical processes. Focused on enhancing performance and responsiveness for Android and iOS devices.",
      es: "Desarrollé aplicaciones móviles para la gestión de servicios y atención al cliente con Angular e Ionic. Integré componentes frontend con los sistemas internos de Telefónica mediante APIs, asegurando el acceso eficiente a procesos clave. Me enfoqué en optimizar el rendimiento y la responsividad en dispositivos Android e iOS.",
    },
    tools: {
      en: ["Angular", "Ionic", "React", "Node.js"],
      es: ["Angular", "Ionic", "React", "Node.js"],
    },
    logo: {
      src: "/experiences/ntt_data_logo.jpg",
      alt: "NTT Data Logo",
    },
    link: "https://pe.nttdata.com/",
  },
];
