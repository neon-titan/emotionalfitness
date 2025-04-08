
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Emotional Fitness Training | Peak Performance | Alan Muellegger"
        description="Optimize your emotions for peak performance. Boutique coaching for high performers seeking breakthrough results in business and life."
        keywords="emotional fitness, peak performance, high performer coaching, emotional optimization, Alan Muellegger"
      />
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
