import { useEffect } from "react";
import { sendWebhook } from "@/lib/webhook";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import ProblemSection from "@/components/landing/ProblemSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import MethodSection from "@/components/landing/MethodSection";
import StepsSection from "@/components/landing/StepsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import ValueSection from "@/components/landing/ValueSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FormSection from "@/components/landing/FormSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    sendWebhook("page_view", "landing_page", {
      url: window.location.href,
      referrer: document.referrer || null,
      userAgent: navigator.userAgent,
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <PainSection />
      <ProblemSection />
      <BeforeAfterSection />
      <MethodSection />
      <StepsSection />
      <ResultsSection />
      <ValueSection />
      <GuaranteeSection />
      <FormSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
