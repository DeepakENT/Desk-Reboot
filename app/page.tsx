import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Warning from "@/components/Warning";
import Solution from "@/components/Solution";
import FeelingsSection from "@/components/FeelingsSection";
import Experience from "@/components/Experience";
import HowItWorks from "@/components/HowItWorks";
import Stakes from "@/components/Stakes";
import DeepPrivateCreates from "@/components/DeepPrivateCreates";
import BottomCTA from "@/components/BottomCTA";
import BottomFooter from "@/components/BottomFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Warning/>
      <FeelingsSection />
      <Solution/>
      <Experience />
      <HowItWorks />
      <Stakes />
      <DeepPrivateCreates />
      <BottomCTA />
      <BottomFooter />
    </>
  );
}