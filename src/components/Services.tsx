
import { Card } from "@/components/ui/card";
import { Brain, Heart, Zap, Target } from "lucide-react";

const services = [
  {
    title: "Peak State",
    description: "Achieve optimal emotional and mental states that unlock your full potential. Emotional Fitness Training helps you access high-performance flow in both your personal and professional life — without burnout or collapse.",
    icon: <Zap className="w-10 h-10 text-brand-blue" />
  },
  {
    title: "Optimization",
    description: "Fine-tune your emotional responses and rewire mental frameworks to enhance creativity, presence, and decision-making. This training turns reactive patterns into conscious clarity.",
    icon: <Brain className="w-10 h-10 text-brand-purple" />
  },
  {
    title: "Passion",
    description: "Reconnect with your deepest motivations and learn to channel raw emotion into purpose-driven momentum. This is how you fuel consistent action, not through hype, but through aligned energy.",
    icon: <Heart className="w-10 h-10 text-brand-pink" />
  },
  {
    title: "Drive",
    description: "Develop long-term emotional stamina and resilience. You'll build the internal grit required to pursue your vision with unwavering focus — no matter what resistance shows up.",
    icon: <Target className="w-10 h-10 text-brand-blue" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Our Services</h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
          Comprehensive emotional fitness training designed to optimize your mental and emotional performance 
          across all areas of life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-muted border-none p-6 hover:bg-muted/80 transition-colors gradient-border">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
