import { FaqSection } from "@/components/FaqSection";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProofBand } from "@/components/ProofBand";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-void)] text-[var(--ink-primary)]">
      <Header />
      <main>
        <Hero />
        <ProofBand />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <FinalCtaFooter />
    </div>
  );
}
