"use client"

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function SectionTitle({ title }: { title: string }) {
  const refSentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStuck(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (refSentinel.current) {
      observer.observe(refSentinel.current);
    }

    return () => {
      if (refSentinel.current) {
        observer.unobserve(refSentinel.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={refSentinel} className="h-[1px] top-[-20px] relative" />

      <div className={cn("sticky md:static top-[22px] z-40 flex items-center gap-4 uppercase ", stuck && "w-fit md:w-full")}>
        <h2 className="text-sm md:text-base font-bold text-[var(--foreground)] whitespace-nowrap">
          {title}
        </h2>
        <span className={cn(
          "h-0.5 flex-1 bg-[var(--details)] transition-opacity duration-200", 
          stuck ? "hidden md:block" : "block"
        )} />
      </div>
    </>
  );
}
