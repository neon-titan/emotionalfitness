
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCard = ({ 
  title, 
  description, 
  features, 
  cta, 
  popular = false,
  ctaLink = "#contact"
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  cta: string; 
  popular?: boolean;
  ctaLink?: string;
}) => {
  return (
    <div className={`relative bg-muted/20 rounded-xl p-8 border ${popular ? 'border-brand-purple' : 'border-white/10'} h-full flex flex-col`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold py-1 px-3 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 text-brand-blue">
              <Check className="h-5 w-5" />
            </div>
            <span className="text-white/80">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-4">
        <Button 
          className={`w-full ${popular ? 'bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink' : 'bg-white/10 hover:bg-white/20'} transition-all`}
          onClick={() => window.location.href = ctaLink}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">
          Elevate Your Performance
        </h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
          Customized emotional fitness solutions tailored to your unique needs and goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Tailored One-on-One"
            description="Boutique coaching experience customized to your specific needs and goals."
            features={[
              "Personalized emotional fitness assessment",
              "Custom-designed training protocols",
              "Direct access to Alan via messaging",
              "Prioritized scheduling",
              "Tailored resources and exercises"
            ]}
            cta="Book a Discovery Call"
            ctaLink="https://calendly.com/alan-muellegger/emotional-fitness-session"
          />
          
          <PricingCard
            title="Group Training"
            description="Immersive community-based experience with collaborative learning and growth."
            features={[
              "Structured emotional fitness methodology",
              "Peer learning and accountability",
              "Community support network",
              "Weekly group training sessions",
              "Shared resources and practice sessions"
            ]}
            cta="Join the Waitlist"
            popular={true}
          />
          
          <PricingCard
            title="VIP Intensive"
            description="Exclusive in-person transformative experience for breakthrough results."
            features={[
              "Two full days of immersive training",
              "Luxury retreat setting",
              "Complete nervous system reset",
              "Personalized breakthrough protocol",
              "6 months of follow-up support"
            ]}
            cta="Apply Now"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 italic">
            "Investment in emotional fitness pays dividends across every area of your life."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
