"use client";

import Link from "next/link";
import Image from "next/image";

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "For Accountants", href: "/for-accountants" },
  { label: "For Financial Advisers", href: "/for-financial-advisors" },
  { label: "For Families", href: "/for-families" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Security", href: "/security" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Row 1: Logo + tagline + social */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link href="/" aria-label="Klaris home">
            <Image
              src="/klaris-logo.webp"
              alt="Klaris logo"
              width={120}
              height={40}
              className="h-10 brightness-0 invert object-contain"
            />
          </Link>
          <p className="text-sm text-gray-400 text-center max-w-md">
            Wealth structure visualisation software for Australian accountants
            and financial advisers serving high net worth clients.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/klaris-au"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Klaris on LinkedIn"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/klaris_au"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Klaris on X"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@klarisapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Klaris on YouTube"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Row 2: Nav links */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Row 3: Legal line */}
        <p className="mt-6 text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Krrisp Pty Ltd (ABN 38 609 221 570
          &middot; ACN 609 221 570) trading as Klaris AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
