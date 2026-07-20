import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import JsonLd from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angel-arteaga.vercel.app"),
  title: "Angel Arteaga | Senior Frontend Developer",
  description:
    "Portfolio of Angel Arteaga, Senior Frontend Developer specialized in React, Next.js, TypeScript, Microfrontends and Azure AI. Building scalable digital platforms for the financial and e-commerce sectors.",
  authors: [{ name: "Angel Arteaga" }],
  creator: "Angel Arteaga",
  keywords: [
    "Angel Arteaga",
    "Senior Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Microfrontends",
    "Azure AI",
    "Azure",
    "Node.js",
    "NestJS",
    "React Native",
    "Solidity",
    "Blockchain",
    "Polygon",
    "JavaScript",
    "Angular",
    "Ionic",
    "Docker",
    "AWS",
    "GCP",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Go",
    "Java",
    "Python",
    "NTT DATA",
    "Scotiabank",
    "Software Engineer",
    "Portfolio",
    "Portafolio desarrollador",
    "Desarrollo web",
    "Peru",
    "Lima",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://angel-arteaga.vercel.app/",
  },
  openGraph: {
    title: "Angel Arteaga | Senior Frontend Developer",
    description:
      "Senior Frontend Developer building scalable digital platforms with React, Next.js, Microfrontends, and Azure AI.",
    url: "https://angel-arteaga.vercel.app/",
    siteName: "Angel Arteaga Portfolio",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Angel Arteaga — Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Arteaga | Senior Frontend Developer",
    description:
      "Senior Frontend Developer building scalable digital platforms with React, Next.js, Microfrontends, and Azure AI.",
    images: ["/og-image.png"],
    creator: "@angelarteaga",
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
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
