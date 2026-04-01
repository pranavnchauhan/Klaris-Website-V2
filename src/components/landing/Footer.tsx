"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

const productLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Security", href: "/security" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const Footer = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`bg-[#0a0a0a] text-gray-300 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" aria-label="Klaris home">
              <Image
                src="/klaris-logo.webp"
                alt="Klaris logo - Australian wealth management documentation software"
                width={140}
                height={48}
                className="h-12 sm:h-14 brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              Klaris gives Australian families and their advisors full visibility
              over finances, assets, and estate plans — all in one secure place.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 480"
                className="h-4 w-6 shrink-0"
                aria-hidden="true"
              >
                <rect width="640" height="480" fill="#00008B" />
                <g fill="#fff">
                  <path d="M0 0h320v240H0z" fillOpacity="0" />
                  <path d="M0 0l320 240M320 0L0 240" stroke="#fff" strokeWidth="30" />
                  <path d="M0 0l320 240M320 0L0 240" stroke="#C8102E" strokeWidth="20" />
                  <path d="M160 0v240M0 120h320" stroke="#fff" strokeWidth="50" />
                  <path d="M160 0v240M0 120h320" stroke="#C8102E" strokeWidth="30" />
                  <circle cx="490" cy="240" r="30" />
                  <polygon points="490,180 497,200 518,200 501,213 508,233 490,220 472,233 479,213 462,200 483,200" />
                  <polygon points="560,120 567,140 588,140 571,153 578,173 560,160 542,173 549,153 532,140 553,140" />
                  <polygon points="560,340 567,360 588,360 571,373 578,393 560,380 542,393 549,373 532,360 553,360" />
                  <polygon points="490,400 497,420 518,420 501,433 508,453 490,440 472,453 479,433 462,420 483,420" />
                  <polygon points="420,280 427,300 448,300 431,313 438,333 420,320 402,333 409,313 392,300 413,300" />
                </g>
              </svg>
              <span>Australian-built &amp; operated</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider pt-4">
              Industry Affiliations
            </h3>
            <p className="text-sm text-gray-400">FPA | SMSF Association</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/klaris-au"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Klaris on LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
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
              className="text-gray-400 hover:text-white transition-colors"
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
          </div>

          <div className="text-center sm:text-right space-y-1">
            <p className="text-xs text-gray-500">
              Krrisp Pty Ltd | ABN: 38 609 221 570 | ACN: 609 221 570
            </p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Klaris. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
