"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTubeFacade from "@/components/landing/YouTubeFacade";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden section-hero py-16 md:py-24 lg:py-32">
      {/* Parallax gradient blobs - hidden on mobile */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-secondary/40 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl hidden md:block"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.08}px))` }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary w-fit">
              <ShieldCheck className="h-4 w-4" />
              <span>Australian-Built Wealth Platform</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Structure Your Wealth.{" "}
              <span className="text-accent">Secure Your Legacy.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Klaris gives you a single, secure place to map every trust, entity, and asset
              your family holds, so nothing falls through the cracks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Secure Your Legacy Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/faq" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                FAQs
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right column - Video */}
          <div className="flex items-center justify-center">
            <YouTubeFacade
              videoId="iF6_-tx2RgI"
              title="Klaris: Structure Your Wealth"
              caption="See how Klaris maps your entire wealth structure in minutes."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
