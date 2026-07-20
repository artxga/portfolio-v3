"use client"

import { certifications } from "@/core/static/certifications";
import CertificationItem from "./certification-item";
import SectionTitle from "./section-title";
import { useLanguage } from "@/context/language-context";

export default function CertificationsSection() {
  const { language } = useLanguage()

  return (
    <section id="certifications" className="flex flex-col justify-center gap-9 pt-18 pb-8">
      <SectionTitle title={language === "en" ? "Certifications" : "Certificaciones"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          certifications.map((item, index) => (
            <CertificationItem key={index} {...item} />
          ))
        }
      </div>
    </section>
  );
}
