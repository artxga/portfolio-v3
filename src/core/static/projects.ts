import SupportedLanguages from "../types/supported-languages";

export interface ProjectData {
  title: Record<SupportedLanguages, string>;
  description: Record<SupportedLanguages, string>;
  techStack: string[];
  img: {
    src: string;
    alt: string;
  };
  link?: string;
}

export const projects: ProjectData[] = [
  {
    title: {
      en: "Portfolio 3.0",
      es: "Portafolio 3.0",
    },
    description: {
      en: "A clean, responsive portfolio site built to showcase skills, projects, and technologies in a modern and performant stack.",
      es: "Sitio web de portafolio moderno, limpio y responsivo para mostrar habilidades, proyectos y tecnologías empleadas.",
    },
    techStack: ["React", "Next.js", "Tailwind", "TypeScript", "Git"],
    img: {
      src: "/projects/portfolio_3.png",
      alt: "Portfolio 3.0",
    },
    link: "https://github.com/artxga/portfolio-v3",
  },
  {
    title: {
      en: "Savings Web App (Work in progress)",
      es: "Savings Web App (En construcción)",
    },
    description: {
      en: "A personal finance management platform designed to help users track income, expenses, and savings efficiently.",
      es: "Plataforma para la gestión de finanzas personales que permite registrar ingresos, egresos y ahorros de manera eficiente.",
    },
    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "ShadCN",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    img: {
      src: "/projects/savings_project.png",
      alt: "Savings App",
    },
  },
  {
    title: {
      en: "SISGEAP App",
      es: "SISGEAP App",
    },
    description: {
      en: "Mobile app for SISGEAP, an agricultural project management platform developed for Asociación Pataz, an NGO supported by mining company Poderosa.",
      es: "Aplicación móvil para SISGEAP, plataforma de gestión de proyectos agrícolas de la ONG Asociación Pataz, respaldada por la minera Poderosa.",
    },
    techStack: ["Angular", "Ionic", "Node.js", "Git"],
    img: {
      src: "/projects/sisgeap.png",
      alt: "SISGEAP App",
    },
  },
  {
    title: {
      en: "Medical Appointment Service",
      es: "Servicio de citas médicas",
    },
    description: {
      en: "Backend service for scheduling and managing medical appointments for insured users, built using a serverless architecture.",
      es: "Servicio backend para agendamiento y gestión de citas médicas para asegurados, implementado con arquitectura serverless.",
    },
    techStack: ["Serverless", "Node.js", "AWS", "Docker", "Jest", "Git"],
    img: {
      src: "/projects/medical_appointment.png",
      alt: "Medical Appointment Service",
    },
    link: "https://github.com/artxga/aws-scheduler-project",
  },
  {
    title: {
      en: "Altavista IT Web",
      es: "Altavista IT Web",
    },
    description: {
      en: "Company website for Altavista IT, featuring a modern layout to present solutions, projects, and contact options.",
      es: "Sitio web corporativo para Altavista IT con diseño moderno para presentar soluciones, proyectos y datos de contacto.",
    },
    techStack: ["React", "Next.js", "Tailwind", "TypeScript", "Git"],
    img: {
      src: "/projects/altavista_it.png",
      alt: "Altavista IT Web",
    },
    link: "https://altavista-it.com/",
  },
  {
    title: {
      en: "Portfolio 2.0",
      es: "Portafolio 2.0",
    },
    description: {
      en: "Second iteration of my personal portfolio, featuring earlier work and a simpler UI/UX approach.",
      es: "Segunda versión de mi portafolio personal, con proyectos anteriores y un enfoque de interfaz más simple.",
    },
    techStack: ["React", "Next.js", "Tailwind", "TypeScript", "Git"],
    img: {
      src: "/projects/portfolio_2.png",
      alt: "Portafolio 2.0",
    },
    link: "https://ssssshel.vercel.app/",
  },
  {
    title: {
      en: "Asterisks",
      es: "Asterisks",
    },
    description: {
      en: "E-commerce platform for virtual fashion, offering a clean shopping experience and dynamic product catalog.",
      es: "Plataforma e-commerce de moda virtual con experiencia de compra fluida y catálogo de productos dinámico.",
    },
    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Docker",
    ],
    img: {
      src: "/projects/asterisks.png",
      alt: "Asterisks",
    },
  },
  {
    title: {
      en: "Dione",
      es: "Dione",
    },
    description: {
      en: "Interactive virtual encyclopedia of the Solar System, aimed at providing educational insights with rich visuals and dynamic content.",
      es: "Enciclopedia virtual interactiva del Sistema Solar, con enfoque educativo y contenido visual enriquecido.",
    },
    techStack: ["React", "Next.js", "Tailwind", "TypeScript", "MongoDB", "Git"],
    img: {
      src: "/projects/dione.png",
      alt: "Dione",
    },
    link: "https://dione.vercel.app/",
  },
];
