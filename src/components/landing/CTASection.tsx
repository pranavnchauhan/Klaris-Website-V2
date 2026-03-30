"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

export default function CTASection() {
  const [scrollY, setScrollY] = useState(0);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden section-cta py-16 md:py-24">
      {/* Parallax white blobs */}
      <div
        className="absolute -top-24 -left-24 h-[350px] w-[350px] rounded-full bg-white/10 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * -0.07}px)` }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-[200px] w-[200px] rounded-full bg-white/5 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-5">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4 text-center">
            Get Started
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 text-center">
            Your AI financial planning platform awaits. Book a demo to see how Klaris
            can bring clarity to your wealth structure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://cal.com/kd-pc/klaris-partnership-discussion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Demo
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <Link href="/faq" className="hover:text-primary-foreground transition-colors underline-offset-4 hover:underline">
              FAQs
            </Link>
            <Link href="/about" className="hover:text-primary-foreground transition-colors underline-offset-4 hover:underline">
              About Klaris
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
