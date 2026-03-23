import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";
import PortfolioSection from "./components/PortfolioSection"; 
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Ticker from "./components/Ticker";
import ServicesSection from "./components/ServicesSection";


export default function Home() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <Ticker/>
        <ServicesSection/>
        <Stats/>
        <PortfolioSection/>
        <Testimonials/>
        <CtaSection/>
        <Footer/>
      </div>      
  );
}
