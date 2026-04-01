import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Klaris AI - Wealth Planning Software Australia",
  description:
    "How Klaris AI uses cookies and tracking technologies on our website.",
  alternates: {
    canonical: "https://klaris.com.au/cookie-policy",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
