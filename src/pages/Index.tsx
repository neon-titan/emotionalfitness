
import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { META } from "@/utils/constants";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical sections
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Skeleton loaders for lazy-loaded components
const SectionSkeleton = () => (
  <div className="w-full py-16" aria-hidden="true">
    <Skeleton className="w-48 h-10 mx-auto mb-8" />
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
      <Skeleton className="w-full h-64" />
      <Skeleton className="w-full h-64" />
    </div>
  </div>
);

/**
 * Index Page Component
 * 
 * Main landing page of the application.
 * Contains all section components in sequence.
 * Each section is optimized for both user experience and search engines.
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
        canonical="https://emotionalfitness.com/"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        
        {/* Lazy loaded sections with suspense fallbacks */}
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Pricing />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
