import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--color-paper)] text-[var(--color-ink)]">
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Cases />
      <Testimonials />
      <Benefits />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
