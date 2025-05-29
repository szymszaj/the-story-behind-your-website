import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  useEffect(() => {
    document.title =
      "Twoja Strona, Twoja Historia - Tworzę strony internetowe, które opowiadają Twoją historię";
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
