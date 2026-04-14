import type { Metadata } from "next";
import { KLARIS_EMAIL, KLARIS_PHONE_DISPLAY, KLARIS_SITE_URL } from "@/lib/constants";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Klaris AI team for demos, support, or partnership inquiries. Australian-built wealth planning software.",
  alternates: { canonical: "https://klaris.com.au/contact" },
  openGraph: {
    title: "Contact | Klaris",
    description:
      "Contact the Klaris AI team for demos, support, or partnership inquiries. Australian-built wealth planning software.",
    url: "https://klaris.com.au/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Klaris AI",
    url: `${KLARIS_SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Klaris AI",
      email: KLARIS_EMAIL,
      telephone: KLARIS_PHONE_DISPLAY,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bella Vista",
        addressRegion: "NSW",
        postalCode: "2153",
        addressCountry: "AU",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </main>
  );
}
