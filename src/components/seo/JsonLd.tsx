export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Klaris",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: "https://klaris.com.au",
        description:
          "Finance visibility platform for documenting and visualizing complex ownership structures across properties, trusts, SMSFs, and investments. Designed for Australian families, accountants, and financial advisors.",
        featureList: [
          "Document ownership structures",
          "Visualize financial relationships",
          "Track trusts, SMSFs, and companies",
          "Advisor collaboration",
          "PDF export and reporting",
          "Australian data hosting",
          "SSL/TLS encryption",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://klaris.com.au/#organization",
        name: "Klaris",
        alternateName: [
          "Krrisp Digital",
          "Klaris AI",
          "Klaris by Krrisp Digital",
        ],
        url: "https://klaris.com.au",
        logo: "https://klaris.com.au/favicon.png",
        sameAs: [
          "https://www.linkedin.com/company/krrisp-digital",
          "https://g.co/kgs/krrispdigital",
          "https://x.com/hashtag/krrispdigital",
          "https://fintechaustralia.org.au",
          "https://www.cpaaustralia.com.au",
          "https://www.charteredaccountantsanz.com",
          "https://www.smsfassociation.com",
        ],
        founder: {
          "@type": "Person",
          name: "Pranav Chauhan",
          jobTitle: "Founder & CEO",
          url: "https://www.linkedin.com/in/pranav-chauhan-au/",
          sameAs: "https://www.linkedin.com/in/pranav-chauhan-au/",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "info@klaris.com.au",
          telephone: "+61-483-966-111",
          areaServed: "AU",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "441/14-16 Lexington Dr",
          addressLocality: "Bella Vista",
          addressRegion: "NSW",
          postalCode: "2153",
          addressCountry: "AU",
        },
      },
      {
        "@type": "ProfessionalService",
        name: "Klaris by Krrisp Digital",
        description:
          "Finance visibility platform for Australian families and advisors to document and visualize complex ownership structures across trusts, SMSFs, and investments.",
        url: "https://klaris.com.au",
        telephone: "+61-483-966-111",
        email: "info@klaris.com.au",
        image: "https://klaris.com.au/og-image.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "441/14-16 Lexington Dr",
          addressLocality: "Bella Vista",
          addressRegion: "NSW",
          postalCode: "2153",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.7298,
          longitude: 150.9527,
        },
        areaServed: {
          "@type": "Country",
          name: "Australia",
        },
        knowsAbout: [
          "Wealth Management Software",
          "Trust Documentation",
          "SMSF Tracking",
          "Financial Visualization",
        ],
        sameAs: [
          "https://www.linkedin.com/company/krrisp-digital",
          "https://g.co/kgs/krrispdigital",
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Krrisp Pty Ltd",
        legalName: "Krrisp Pty Ltd",
        url: "https://klaris.com.au",
        telephone: "+61-483-966-111",
        email: "info@klaris.com.au",
        description:
          "Klaris by Krrisp Pty Ltd provides AI-powered SMSF structure visualization software for Australian accountants, financial advisors, and SMSF professionals.",
        currenciesAccepted: "AUD",
        paymentAccepted: "Credit Card, Debit Card",
        openingHours: "Mo-Fr 09:00-17:00",
        areaServed: {
          "@type": "Country",
          name: "Australia",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "441/14-16 Lexington Dr",
          addressLocality: "Bella Vista",
          addressRegion: "NSW",
          postalCode: "2153",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-33.7292",
          longitude: "150.9570",
        },
        identifier: [
          {
            "@type": "PropertyValue",
            name: "ABN",
            value: "38 609 221 570",
          },
          {
            "@type": "PropertyValue",
            name: "ACN",
            value: "609 221 570",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/krrisp-digital",
          "https://g.co/kgs/krrispdigital",
        ],
      },
      {
        "@type": "WebSite",
        name: "Klaris",
        alternateName: ["Klaris AI", "Klaris by Krrisp Digital"],
        url: "https://klaris.com.au",
        publisher: {
          "@id": "https://klaris.com.au/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://klaris.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "For Accountants",
            item: "https://klaris.com.au/for-accountants",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "FAQ",
            item: "https://klaris.com.au/faq",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: "https://klaris.com.au/contact",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Security",
            item: "https://klaris.com.au/security",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Privacy Policy",
            item: "https://klaris.com.au/privacy",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Terms of Service",
            item: "https://klaris.com.au/terms",
          },
        ],
      },
      {
        "@type": "VideoObject",
        name: "Why Klaris? Wealth Structuring Software for High-Net-Worth Australian Families",
        description:
          "Discover why high-net-worth Australian families, accountants, and financial advisors choose Klaris to bring clarity to complex wealth structures. Klaris maps Family Trusts, SMSFs, companies, and investments in one secure platform \u2014 giving you full visibility of your financial legacy and peace of mind for the next generation.",
        thumbnailUrl:
          "https://i.ytimg.com/vi/iF6_-tx2RgI/hqdefault.jpg",
        uploadDate: "2026-02-01",
        duration: "PT1M30S",
        embedUrl: "https://www.youtube.com/embed/iF6_-tx2RgI",
        url: "https://youtu.be/iF6_-tx2RgI",
        contentUrl: "https://youtu.be/iF6_-tx2RgI",
        keywords:
          "why Klaris, wealth structuring software, high net worth families Australia, family trust software, SMSF structure visualizer, financial legacy planning",
        publisher: {
          "@id": "https://klaris.com.au/#organization",
        },
        inLanguage: "en-AU",
        isPartOf: {
          "@type": "WebPage",
          url: "https://klaris.com.au",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Get Started with Klaris",
        description:
          "A simple three-step process to start visualizing your wealth structures with Klaris.",
        totalTime: "PT10M",
        tool: [
          {
            "@type": "HowToTool",
            name: "Web browser",
          },
          {
            "@type": "HowToTool",
            name: "Email account",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Book a Demo",
            text: "Schedule a personalised demo with our team to see Klaris in action and find the right plan for your needs.",
            url: "https://cal.com/kd-pc/klaris-partnership-discussion",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Access Your Vault",
            text: "After signup, you'll be instantly redirected to the Klaris application at app.klaris.com.au where your secure vault awaits.",
            url: "https://app.klaris.com.au",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Map Your Wealth",
            text: "Start building KRSP (Key Relationship Structure Platform) diagrams to visualize how your trusts, companies, properties, and assets connect.",
            url: "https://app.klaris.com.au",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
