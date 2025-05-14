import SupportedLanguages from "../types/supported-languages";

export interface ProjectData {
  title: Record<SupportedLanguages, string>;
  description: Record<SupportedLanguages, string>;
  techStack: string[];
}

export const projects: ProjectData[] = [
  {
    title: {
      en: "SISGEAP App",
      es: "SISGEAP App",
    },
    description: {
      en: "SISGEAP is an academic-management platform that streamlines student enrollment, grade tracking, and administrative reporting through a responsive web interface.",
      es: "SISGEAP es una plataforma de gestión académica que agiliza la matrícula de estudiantes, el seguimiento de calificaciones y la generación de informes administrativos mediante una interfaz web responsiva.",
    },
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "MongoDB",
      "TypeScript",
      "GraphQL",
      "Prisma",
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
    ],
  },
];
