import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import AudienceSection from "@/components/landing/AudienceSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import SecurityTrustSection from "@/components/landing/SecurityTrustSection";
import JsonLd from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <main>
      <JsonLd />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <AudienceSection />
      <BenefitsSection />
      <CTASection />
      <SecurityTrustSection />
    </main>
  );
}
