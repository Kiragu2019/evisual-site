import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import ServicesSection from "./components/ServicesSection";
import Stats from "./components/Stats";
import PortfolioSection from "./components/PortfolioSection";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <div>
      {/* Navbar is now handled by layout.tsx */}
      <Hero />
      <Ticker />
      <ServicesSection />
      <Stats />
      <PortfolioSection />
      <Testimonials />
      <CtaSection />
      {/* Footer is now handled by layout.tsx */}
    </div>
  );
}