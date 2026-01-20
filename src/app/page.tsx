import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureGrid from "@/components/FeatureGrid";
import TrustSecurity from "@/components/TrustSecurity";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <FeatureGrid />
      <TrustSecurity />
      <CTA />
      <Footer />
    </main>
  );
}
