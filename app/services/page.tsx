import ServicesSection from "../components/ServicesSection";
import CtaSection from "../components/CtaSection";

export default function ServicesPage() {
  return (
    <div className="pt-20"> {/* pt-20 to clear the fixed navbar */}
      <ServicesSection />
      <CtaSection />
    </div>
  );
}