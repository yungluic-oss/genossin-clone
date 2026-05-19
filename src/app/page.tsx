import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Nav />
      <Hero />
      <LogoStrip />
      <Services />
      <Testimonials />
      <Process />
      <Cases />
      <Benefits />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
