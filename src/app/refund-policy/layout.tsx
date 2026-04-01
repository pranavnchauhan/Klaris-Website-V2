import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Refund & Cancellation Policy | Klaris AI - Wealth Planning Software Australia",
  description:
    "Refund and cancellation policy for Klaris AI subscription plans.",
  alternates: {
    canonical: "https://klaris.com.au/refund-policy",
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
