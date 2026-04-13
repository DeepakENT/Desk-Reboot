import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeelingsSection from "@/components/FeelingsSection";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stakes from "@/components/Stakes";
import DeepPrivateCreates from "@/components/DeepPrivateCreates";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeelingsSection />
      <Experience />
      <Services />
      <HowItWorks />
      <Stakes />
      <DeepPrivateCreates />
      <BottomCTA />
      <Footer />
    </>
  );
}