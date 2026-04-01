import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/landing/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://klaris.com.au"),
  title: {
    default: "Klaris | Structure Your Wealth & Secure Your Legacy",
    template: "%s | Klaris AI",
  },
  description:
    "The leading finance visibility platform for Australian families and advisors to manage trusts, SMSFs, and complex ownership structures.",
  keywords: [
    "klaris AI",
    "wealth structuring software",
    "AI wealth planning tool",
    "financial structure visualizer",
    "wealth planning software Australia",
    "financial advisor tools Australia",
    "estate planning software",
    "trust and SMSF structure software",
    "AI financial planning platform",
    "portfolio visualization tools",
    "family office planning tools",
  ],
  authors: [{ name: "Krrisp Digital" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://klaris.com.au/",
    siteName: "Klaris",
    title: "Klaris | Structure Your Wealth & Secure Your Legacy",
    description:
      "The leading finance visibility platform for Australian families and advisors to manage trusts, SMSFs, and complex ownership structures.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaris | Structure Your Wealth & Secure Your Legacy",
    description:
      "The leading finance visibility platform for Australian families and advisors to manage trusts, SMSFs, and complex ownership structures.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "uNpqOon7Qo1AqmbORY_VSCdMlkiXmDAVS_gMIrl-h8w",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#1E4038",
    "geo.region": "AU",
    "geo.placename": "Bella Vista",
    "ai:description":
      "Klaris AI is Australian wealth structuring software that helps individuals, families, accountants, and financial advisors document and visualize complex ownership structures.",
    "ai:category":
      "AI Wealth Planning Tool, Wealth Structuring Software, Estate Planning Software, Financial Structure Visualizer",
    "ai:target_audience":
      "Australian families with complex asset structures, accountants, financial advisors, estate planners",
    "ai:key_features":
      "AI financial planning platform, interactive wealth graphs, portfolio visualization tools, trust documentation, SMSF tracking",
    "ai:pricing":
      "Book a demo to discuss your needs at cal.com/kd-pc/klaris-partnership-discussion",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://app.klaris.com.au" />
        <link rel="dns-prefetch" href="https://app.klaris.com.au" />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MW3GNP9D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <CookieConsent />

        {/* Deferred Analytics */}
        <Script id="klaris-analytics" strategy="lazyOnload">
          {`
            // GA4
            var gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-WH940LK0Y2';
            document.head.appendChild(gtagScript);
            gtagScript.onload = function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-WH940LK0Y2');
              // AI Referral Tracking
              var referrer = document.referrer.toLowerCase();
              var aiSources = [
                { pattern: 'chat.openai.com', source: 'chatgpt' },
                { pattern: 'chatgpt.com', source: 'chatgpt' },
                { pattern: 'perplexity.ai', source: 'perplexity' },
                { pattern: 'claude.ai', source: 'claude' },
                { pattern: 'you.com', source: 'you' },
                { pattern: 'gemini.google.com', source: 'google_gemini' },
                { pattern: 'copilot.microsoft.com', source: 'microsoft_copilot' },
                { pattern: 'meta.ai', source: 'meta_ai' }
              ];
              for (var i = 0; i < aiSources.length; i++) {
                if (referrer.indexOf(aiSources[i].pattern) !== -1) {
                  gtag('event', 'ai_referral', { 'ai_source': aiSources[i].source, 'referrer_url': referrer });
                  gtag('set', 'user_properties', { 'traffic_source_type': 'ai_assistant' });
                  break;
                }
              }
            };
            // GTM
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MW3GNP9D');
          `}
        </Script>
      </body>
    </html>
  );
}
