import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProofSection from "@/components/landing/ProofSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import MethodSection from "@/components/landing/MethodSection";
import StepsSection from "@/components/landing/StepsSection";
import ValueSection from "@/components/landing/ValueSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="overflow-hidden">
    <Header />
    <HeroSection />
    <PainSection />
    <ProblemSection />
    <ProofSection />
    <BeforeAfterSection />
    <MethodSection />
    <StepsSection />
    <ValueSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;
