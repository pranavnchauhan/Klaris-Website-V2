"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown } from "lucide-react";

const solutionsLinks = [
  { label: "For Accountants", href: "/for-accountants" },
  { label: "For Financial Advisers", href: "/for-financial-advisors" },
  { label: "For Families", href: "/for-families" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isSolutionsActive = pathname.startsWith("/for-");

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSolutionsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setSolutionsOpen(false), 150);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/klaris-logo.webp"
              alt="Klaris - Wealth structure visualisation software for Australian accountants and advisers"
              width={400}
              height={130}
              priority
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-5"
          >
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              About
            </Link>

            {/* Solutions dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
                className={`flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors ${
                  isSolutionsActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Solutions
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-background shadow-lg py-2"
                >
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setSolutionsOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              Contact
            </Link>

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

          {/* Mobile hamburger */}
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="lg:hidden pt-4 pb-2 border-t border-border mt-4"
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Solutions accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  aria-haspopup="true"
                  aria-expanded={mobileSolutionsOpen}
                  className={`flex items-center justify-between w-full py-2 font-medium transition-colors ${
                    isSolutionsActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div role="menu" className="pl-4 pb-1">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className={`block py-2 text-sm transition-colors ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

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
