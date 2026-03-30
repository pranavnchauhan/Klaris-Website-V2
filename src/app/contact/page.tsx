import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact - Klaris AI | Get in Touch",
  description:
    "Contact the Klaris AI team for demos, support, or partnership inquiries. Australian-built wealth planning software.",
  alternates: { canonical: "https://klaris.com.au/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Klaris AI",
    url: "https://klaris.com.au/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Klaris AI",
      email: "info@klaris.com.au",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
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
