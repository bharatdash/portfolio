import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Automation from "@/components/Automation";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Dashboard from "@/components/Dashboard";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <MetricsStrip />
        <About />
        <Skills />
        <Automation />
        <Experience />
        <Projects />
        <Dashboard />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
