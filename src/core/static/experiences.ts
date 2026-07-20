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
      en: "Senior Frontend Developer",
      es: "Senior Frontend Developer",
    },
    company: {
      en: "NTT DATA - Scotiabank",
      es: "NTT DATA - Scotiabank",
    },
    period: {
      en: "July 2026 - Present",
      es: "Julio 2026 - Actualmente",
    },
    description: {
      en: "Designed and implemented the architecture and migration towards a microfrontends infrastructure, optimizing digital platform scalability and enabling frictionless independent deployments. Designed high-availability interfaces ensuring design system consistency and agile integration with core banking financial services.",
      es: "Diseño e implemento la arquitectura y migración hacia una infraestructura de microfrontends, optimizando la escalabilidad de las plataformas digitales y permitiendo despliegues independientes sin fricción. Diseño interfaces de alta disponibilidad garantizando la consistencia del sistema de diseño y la integración ágil con servicios financieros del core bancario.",
    },
    tools: {
      en: ["React", "Next.js", "TypeScript", "Microfrontends"],
      es: ["React", "Next.js", "TypeScript", "Microfrontends"],
    },
    logo: {
      src: "/experiences/ntt_data_logo.jpg",
      alt: "NTT DATA Logo",
    },
    link: "https://www.scotiabank.com.pe/",
  },
  {
    jobTitle: {
      en: "Mid Frontend Developer",
      es: "Mid Frontend Developer",
    },
    company: {
      en: "NTT DATA - Prima AFP",
      es: "NTT DATA - Prima AFP",
    },
    period: {
      en: "August 2025 - June 2026",
      es: "Agosto 2025 - Junio 2026",
    },
    description: {
      en: "Designed and implemented microfrontends architecture, reducing modular coupling and accelerating production deployment cycles. Developed and integrated artificial intelligence agentic solutions (Azure AI), optimizing internal customer experience and significantly reducing business operational costs. Automated critical processes through the integration of complex APIs and high-security biometric validation.",
      es: "Diseñé e implementé la arquitectura de microfrontends, reduciendo el acoplamiento modular y acelerando los ciclos de despliegue en producción. Desarrollé e integré soluciones agénticas de Inteligencia Artificial (Azure AI), optimizando la experiencia del cliente interno y reduciendo significativamente los costos operativos del negocio. Automaticé procesos críticos mediante la integración de APIs complejas y validación biométrica de alta seguridad.",
    },
    tools: {
      en: ["Node", "React", "Next.js", "TypeScript", "Azure", "Azure AI"],
      es: ["Node", "React", "Next.js", "TypeScript", "Azure", "Azure AI"],
    },
    logo: {
      src: "/experiences/ntt_data_logo.jpg",
      alt: "NTT DATA Logo",
    },
    link: "https://www.prima.com.pe/",
  },
  {
    jobTitle: {
      en: "Mid Full Stack Developer",
      es: "Mid Full Stack Developer",
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
      en: "Empowered the B2B e-commerce platform, increasing efficiency in corporate sales management and commercial conversion. Migrated the architecture to an event-driven microservices ecosystem, raising system availability and scalability during traffic peaks. Reduced the product's technical debt, positively impacting the team's development speed.",
      es: "Potencié la plataforma e-commerce B2B, incrementando la eficiencia en la gestión de ventas corporativas y la conversión comercial. Migré la arquitectura hacia un ecosistema de microservicios orientados a eventos, elevando la disponibilidad y escalabilidad del sistema ante picos de tráfico. Reduje la deuda técnica del producto, impactando positivamente en la velocidad de desarrollo del equipo.",
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
      en: "Mid Full Stack Developer",
      es: "Mid Full Stack Developer",
    },
    company: {
      en: "Avatar Global",
      es: "Avatar Global",
    },
    period: {
      en: "May 2023 - August 2024",
      es: "Mayo 2023 - Agosto 2024",
    },
    description: {
      en: "Developed custom e-commerce solutions for international clients, ensuring consistency in transaction processing. Built robust microservices in Node.js and Java for automated large-scale inventory management. Configured continuous integration and deployment (CI/CD) pipelines, optimizing team delivery times.",
      es: "Desarrollé soluciones e-commerce a medida para clientes internacionales, asegurando la consistencia en el procesamiento de transacciones. Construí microservicios robustos en Node.js y Java para la gestión automatizada de inventarios a gran escala. Configuré flujos de integración y despliegue continuo (CI/CD), optimizando los tiempos de entrega del equipo.",
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
      en: "Junior Frontend Developer",
      es: "Junior Frontend Developer",
    },
    company: {
      en: "NTT DATA - Telefónica (Tren E-Care)",
      es: "NTT DATA - Telefónica (Tren E-Care)",
    },
    period: {
      en: "August 2022 - May 2023",
      es: "Agosto 2022 - Mayo 2023",
    },
    description: {
      en: "Developed native/hybrid mobile applications with Angular and Ionic, improving response times and customer retention in digital channels. Optimized general performance of apps for iOS and Android, reducing device memory consumption.",
      es: "Desarrollé aplicaciones móviles nativas/híbridas con Angular e Ionic, mejorando los tiempos de respuesta y la retención del cliente en canales digitales. Optimicé el rendimiento general de las apps para iOS y Android, reduciendo el consumo de memoria del dispositivo.",
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
