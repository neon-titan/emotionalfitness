
import { Brain, Heart, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Emotional Resilience",
    description: "Develop the tools to bounce back from setbacks and challenges with renewed strength and perspective.",
    icon: Shield,
  },
  {
    title: "Stress Management",
    description: "Learn practical techniques to reduce stress and find calm in the midst of life's demands.",
    icon: Brain,
  },
  {
    title: "Relationship Enhancement",
    description: "Improve your connections with others through better emotional awareness and communication.",
    icon: Heart,
  },
  {
    title: "Performance Optimization",
    description: "Harness your emotions to achieve peak performance in work, sports, and personal goals.",
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive emotional fitness training for every aspect of your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
