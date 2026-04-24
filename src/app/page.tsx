import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Specialists } from "@/components/Specialists";
import { PricingMatrix } from "@/components/PricingMatrix";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustMetrics />
      <ServicesGrid />
      <Specialists />
      <PricingMatrix />
      <Testimonials />
      <Footer />
    </main>
  );
}
