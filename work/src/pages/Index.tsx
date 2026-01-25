import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { setSEOMeta, indexPageSEO } from "@/utils/seo";

const Index = () => {
  useEffect(() => {
    setSEOMeta(indexPageSEO);
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
