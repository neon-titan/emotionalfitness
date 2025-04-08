
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { META } from "@/utils/constants";

/**
 * Index Page Component
 * 
 * Main landing page of the application.
 * Contains all section components in sequence.
 * 
 * @component
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title={META.title}
        description={META.description}
        keywords={META.keywords}
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
