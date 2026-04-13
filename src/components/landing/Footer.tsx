"use client";

import Link from "next/link";

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
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        {/* Row 1: Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="hidden sm:inline text-gray-700" aria-hidden="true">
            |
          </span>
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

        {/* Row 2: Legal line */}
        <p className="mt-6 text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Krrisp Pty Ltd (ABN 38 609 221 570
          &middot; ACN 609 221 570) trading as Klaris AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
