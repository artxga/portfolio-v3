export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angel Arteaga",
    url: "https://angel-arteaga.vercel.app/",
    image: "https://angel-arteaga.vercel.app/portrait.webp",
    jobTitle: "Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, TypeScript, Microfrontends, and Azure AI. Building scalable digital platforms for the financial and e-commerce sectors.",
    email: "angelarteaga17_@outlook.com",
    sameAs: [
      "https://www.linkedin.com/in/angelart179/",
      "https://github.com/artxga/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Microfrontends",
      "Azure",
      "Azure AI",
      "Docker",
      "PostgreSQL",
      "AWS",
      "GCP",
      "Solidity",
      "Polygon",
      "React Native",
      "Angular",
      "Ionic",
      "Go",
      "Java",
      "Python",
    ],
    worksFor: {
      "@type": "Organization",
      name: "NTT DATA",
      url: "https://www.nttdata.com/",
    },
    alumniOf: [],
    nationality: {
      "@type": "Country",
      name: "Peru",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
