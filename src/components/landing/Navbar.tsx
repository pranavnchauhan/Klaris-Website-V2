"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const navLinks = [
  { label: "For Accountants", href: "/for-accountants" },
  { label: "For Advisors", href: "/for-financial-advisors" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/klaris-logo.webp"
              alt="Klaris - Finance visibility platform for Australian families and advisors"
              width={400}
              height={130}
              priority
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-semibold border border-border hover:bg-muted"
            >
              <a
                href="https://app.klaris.com.au"
                className="flex items-center gap-2"
                aria-label="Login to Klaris dashboard"
              >
                <User className="h-4 w-4" aria-hidden="true" />
                Login
              </a>
            </Button>
            <Button asChild size="sm">
              <a
                href="https://cal.com/kd-pc/klaris-partnership-discussion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a demo with Klaris"
              >
                Book a Demo
              </a>
            </Button>
          </nav>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="lg:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                asChild
                className="w-full mt-2 font-semibold border border-border"
              >
                <a
                  href="https://app.klaris.com.au"
                  className="flex items-center gap-2"
                  aria-label="Login to Klaris dashboard"
                >
                  <User className="h-5 w-5" aria-hidden="true" />
                  Login
                </a>
              </Button>
              <Button asChild className="w-full">
                <a
                  href="https://cal.com/kd-pc/klaris-partnership-discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a demo with Klaris"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
