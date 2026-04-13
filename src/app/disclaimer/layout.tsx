import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about Klaris AI wealth planning software. No financial advice provided.",
  alternates: {
    canonical: "https://klaris.com.au/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Klaris",
    description:
      "Important disclaimers about Klaris AI wealth planning software. No financial advice provided.",
    url: "https://klaris.com.au/disclaimer",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
