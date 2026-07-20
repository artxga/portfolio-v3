import SupportedLanguages from "../types/supported-languages";

export interface CertificationData {
  title: Record<SupportedLanguages, string>;
  issuer: string;
  date: Record<SupportedLanguages, string>;
}

export const certifications: CertificationData[] = [
  {
    title: {
      en: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
      es: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    },
    issuer: "Microsoft",
    date: {
      en: "June 2026",
      es: "Junio 2026",
    },
  },
  {
    title: {
      en: "Microsoft Certified: Azure AI Fundamentals",
      es: "Microsoft Certified: Azure AI Fundamentals",
    },
    issuer: "Microsoft",
    date: {
      en: "March 2026",
      es: "Marzo 2026",
    },
  },
  {
    title: {
      en: "Microsoft Certified: Azure Fundamentals",
      es: "Microsoft Certified: Azure Fundamentals",
    },
    issuer: "Microsoft",
    date: {
      en: "December 2025",
      es: "Diciembre 2025",
    },
  },
  {
    title: {
      en: "Github Copilot",
      es: "Github Copilot",
    },
    issuer: "Microsoft",
    date: {
      en: "October 2025",
      es: "Octubre 2025",
    },
  },
];
