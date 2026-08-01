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
  client?: Record<SupportedLanguages, string>;
  category?: Record<SupportedLanguages, string>;
}

export const projects: ProjectData[] = [
  {
    title: {
      en: "Scotiabank Telebanking Platform",
      es: "Plataforma de Telebanking Scotiabank",
    },
    category: {
      en: "Professional",
      es: "Profesional",
    },
    client: {
      en: "Scotiabank",
      es: "Scotiabank",
    },
    description: {
      en: "Enterprise banking platform focused on digital customer service and financial operations. Contributed as a Senior Frontend Developer to the development and modernization of microfrontend-based applications, delivering scalable and maintainable user experiences.",
      es: "Plataforma bancaria empresarial enfocada en la atención digital y operaciones financieras. Participé como Senior Frontend Developer en el desarrollo y modernización de aplicaciones basadas en microfrontends, construyendo experiencias escalables y mantenibles.",
    },
    techStack: [
      "React",
      "TypeScript",
      "Single-SPA",
      "Microfrontends",
    ],
    img: {
      src: "/projects/scotiabank_telebanking.webp",
      alt: "Scotiabank Telebanking Platform",
    },
  },
  {
    title: {
      en: "Prima AFP Virtual Agency",
      es: "Agencia Virtual Prima AFP",
    },
    category: {
      en: "Professional",
      es: "Profesional",
    },
    client: {
      en: "Prima AFP",
      es: "Prima AFP",
    },
    description: {
      en: "Digital self-service platform that enables customers to securely manage retirement accounts and online procedures. Participated in the implementation of modern microfrontend architecture and AI-powered virtual assistants to enhance customer experience.",
      es: "Plataforma de autoservicio digital que permite a los clientes gestionar sus fondos previsionales y realizar trámites en línea de forma segura. Participé en la implementación de una arquitectura de microfrontends y asistentes virtuales impulsados por IA para mejorar la experiencia del usuario.",
    },
    techStack: [
      "React",
      "Next.js",
      "Module Federation",
      "Microfrontends",
      "Azure AI Foundry",
      "TypeScript",
    ],
    img: {
      src: "/projects/prima.webp",
      alt: "Prima AFP Virtual Agency",
    },
  },
  {
    title: {
      en: "Promart B2B E-commerce",
      es: "E-commerce B2B Promart",
    },
    category: {
      en: "Professional",
      es: "Profesional",
    },
    client: {
      en: "Promart",
      es: "Promart",
    },
    description: {
      en: "Business-to-business e-commerce platform designed for corporate purchasing and order management. Contributed to the development of scalable frontend and backend features, ensuring performance and seamless integration with cloud services.",
      es: "Plataforma de comercio electrónico B2B diseñada para compras corporativas y gestión de pedidos. Participé en el desarrollo de funcionalidades frontend y backend escalables, garantizando alto rendimiento e integración con servicios en la nube.",
    },
    techStack: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "GCP",
      "TypeScript",
    ],
    img: {
      src: "/projects/promart_b2b.webp",
      alt: "Promart B2B E-commerce",
    },
  },
  {
    title: {
      en: "Promart B2B Order Management",
      es: "Gestor de Pedidos B2B Promart",
    },
    category: {
      en: "Professional",
      es: "Profesional",
    },
    client: {
      en: "Promart",
      es: "Promart",
    },
    description: {
      en: "Enterprise order management system for handling B2B purchase workflows and business operations. Worked on the development and integration of distributed services across multiple technologies, improving operational efficiency and system reliability.",
      es: "Sistema empresarial para la gestión de pedidos y procesos de compra B2B. Participé en el desarrollo e integración de servicios distribuidos utilizando múltiples tecnologías, mejorando la eficiencia operativa y la confiabilidad del sistema.",
    },
    techStack: [
      "Vue",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Java",
      "PHP",
      "Python",
      "GCP",
    ],
    img: {
      src: "/projects/promart_orders.webp",
      alt: "Promart B2B Order Management",
    },
  },
  {
    title: {
      en: "Segumax Uruguay B2B E-commerce",
      es: "E-commerce B2B Segumax Uruguay",
    },
    category: {
      en: "Professional",
      es: "Profesional",
    },
    client: {
      en: "Segumax Uruguay",
      es: "Segumax Uruguay",
    },
    description: {
      en: "B2B e-commerce platform for the distribution of industrial safety products. Contributed to the development of customer-facing features and integrations with enterprise services to support business operations.",
      es: "Plataforma de comercio electrónico B2B para la distribución de productos de seguridad industrial. Participé en el desarrollo de funcionalidades orientadas al cliente e integraciones con servicios empresariales para soportar las operaciones del negocio.",
    },
    techStack: [
      "Next.js",
      "React",
      "Salesforce",
      "Java",
      "PostgreSQL",
    ],
    img: {
      src: "/projects/segumax.webp",
      alt: "Segumax Uruguay B2B E-commerce",
    },
  },
  {
    title: {
      en: "Telefónica Convergent App",
      es: "App Convergente Telefónica",
    },
    category: {
      en: "Professional",
      es: "Profesional",
    },
    client: {
      en: "Telefónica",
      es: "Telefónica",
    },
    description: {
      en: "Cross-platform mobile application that centralizes digital services and customer management for telecommunications users. Participated in the development of new features and continuous improvements using modern hybrid technologies.",
      es: "Aplicación móvil multiplataforma que centraliza servicios digitales y gestión de clientes para usuarios de telecomunicaciones. Participé en el desarrollo de nuevas funcionalidades y mejoras continuas utilizando tecnologías híbridas modernas.",
    },
    techStack: [
      "Ionic",
      "Angular",
      "Azure",
      "TypeScript",
    ],
    img: {
      src: "/projects/telefonica.webp",
      alt: "Telefónica Convergent App",
    },
  },
  {
    title: {
      en: "Lumen Solar",
      es: "Lumen Solar",
    },
    category: {
      en: "Client",
      es: "Cliente",
    },
    client: {
      en: "Confidential Client",
      es: "Cliente confidencial",
    },
    description: {
      en: "Comprehensive on-demand digital asset sales platform powered by blockchain payments. Built with a robust ecosystem including a cross-platform mobile app and a web administration panel. The architecture leverages smart contracts on the Polygon network, seamless multi-wallet integration, and a NestJS backend, handling high-concurrency on-chain event synchronization using Ethers and RabbitMQ.",
      es: "Plataforma integral para la venta on-demand de activos digitales mediante pagos blockchain. Desarrollada con un ecosistema robusto que incluye una app móvil multiplataforma y un panel administrativo web. La arquitectura se apoya en contratos inteligentes sobre la red de Polygon, integración fluida con múltiples wallets, y un sistema backend impulsado por NestJS, manejando la sincronización de eventos on-chain de alta concurrencia con Ethers y RabbitMQ.",
    },
    techStack: [
      "React Native",
      "Next.js",
      "NestJS",
      "Solidity",
      "Polygon",
      "TypeScript",
      "Ethers",
      "RabbitMQ",
      "PostgreSQL",
    ],
    img: {
      src: "/projects/lumen_solar.png",
      alt: "Lumen Solar Platform",
    },
  },
  {
    title: {
      en: "SISGEAP App",
      es: "SISGEAP App",
    },
    category: {
      en: "Client",
      es: "Cliente",
    },
    client: {
      en: "Asociación Pataz and Minera Poderosa",
      es: "Asociación Pataz y Minera Poderosa"
    },
    description: {
      en: "Mobile app for SISGEAP, an agricultural project management platform developed for Asociación Pataz, an NGO supported by mining company Poderosa.",
      es: "Aplicación móvil para SISGEAP, plataforma de gestión de proyectos agrícolas de la ONG Asociación Pataz, respaldada por la minera Poderosa.",
    },
    techStack: ["Angular", "Ionic", "Node.js", "Git"],
    img: {
      src: "/projects/sisgeap.webp",
      alt: "SISGEAP App",
    },
  },
  {
    title: {
      en: "Savings Web App",
      es: "Savings Web App",
    },
    category: {
      en: "Personal",
      es: "Personal",
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
      src: "/projects/savings_project.webp",
      alt: "Savings App",
    },
    link: "https://savings-project.vercel.app/login",
  },
  {
    title: {
      en: "Medical Appointment Service",
      es: "Servicio de citas médicas",
    },
    category: {
      en: "Personal",
      es: "Personal",
    },
    description: {
      en: "Backend service for scheduling and managing medical appointments for insured users, built using a serverless architecture.",
      es: "Servicio backend para agendamiento y gestión de citas médicas para asegurados, implementado con arquitectura serverless.",
    },
    techStack: ["Serverless", "Node.js", "AWS", "Docker", "Jest", "Git"],
    img: {
      src: "/projects/medical_appointment.webp",
      alt: "Medical Appointment Service",
    },
    link: "https://github.com/artxga/aws-scheduler-project",
  },
  {
    title: {
      en: "Altavista IT Web",
      es: "Altavista IT Web",
    },
    category: {
      en: "Personal",
      es: "Personal",
    },
    description: {
      en: "Company website for Altavista IT, featuring a modern layout to present solutions, projects, and contact options.",
      es: "Sitio web corporativo para Altavista IT con diseño moderno para presentar soluciones, proyectos y datos de contacto.",
    },
    techStack: ["React", "Next.js", "Tailwind", "TypeScript", "Git"],
    img: {
      src: "/projects/altavista_it.webp",
      alt: "Altavista IT Web",
    },
    link: "https://altavista-it.com/",
  },
];
