"use client";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import CertificatesSection from "./components/CertificatesSection";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0d1117] text-white">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4 space-y-24">
        
        {/* Hero Section */}
        <motion.section {...fadeInUp}>
          <HeroSection />
        </motion.section>

        {/* About Section */}
        <motion.section {...fadeInUp}>
          <AboutSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section {...fadeInUp}>
          <ProjectsSection />
        </motion.section>

        {/* Certificates Section */}
        <motion.section {...fadeInUp}>
          <CertificatesSection />
        </motion.section>

        {/* Email / Contact Section */}
        <motion.section {...fadeInUp}>
          <EmailSection />
        </motion.section>
      </div>

      {/* Footer (already animated internally) */}
      <Footer />
    </main>
  );
}
