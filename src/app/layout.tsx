import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angel Arteaga | Full Stack Developer",
  description:
    "Portafolio de Angel Arteaga, desarrollador Full Stack. Explora proyectos, experiencia y servicios tecnológicos.",
  authors: [{ name: "Angel Arteaga" }],
  keywords: [
    "Angel Arteaga",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Angular",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Golang",
    "Docker",
    "AWS",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "GCP",
    "Portafolio de desarrollador",
    "Desarrollo web",
    "AltaVista IT",
  ],
  creator: "Angel Arteaga",
  openGraph: {
    title: "Angel Arteaga | Full Stack Developer",
    description:
      "Desarrollador Full Stack creando soluciones modernas con tecnologías como React, Next.js y Node.js.",
    url: "https://angel-arteaga.vercel.app/",
    siteName: "Angel Arteaga Portfolio",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased  duration-300 bg-[var(--background)] text-[var(--foreground)]`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
