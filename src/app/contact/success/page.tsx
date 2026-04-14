import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for getting in touch with Klaris. We have received your message and will respond as soon as possible.",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-emerald-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4 text-center">
            Message Sent!
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 text-center">
            Thank you for reaching out. We&rsquo;ll get back to you within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
