
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVision",
    content: "Alan's emotional fitness training completely transformed how I handle stress and make decisions under pressure. My team has noticed a significant improvement in my leadership.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Olympic Athlete",
    content: "Working with Alan helped me overcome performance anxiety that was holding me back. I've achieved new personal bests and can maintain peak state even under intense competition pressure.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    content: "The emotional optimization techniques I learned from Alan were game-changers for my business. I'm now able to maintain drive and passion even during challenging periods.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Karen Thekraken",
    role: "Leadership Coach",
    content: "Alan's emotional fitness training completely transformed how I handle stress and make decisions under pressure. Working with him took me to deeper levels of self-awareness than I thought possible. His guidance helped me navigate challenging situations with clarity and purpose, and my team has noticed a significant improvement in my leadership. I'm truly grateful for this journey.",
    image: "/lovable-uploads/698b6461-b40d-447a-b58e-49ae155ad21a.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Success Stories</h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
          Hear from clients who have transformed their performance through emotional fitness training.
        </p>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-muted border-none p-8 md:p-12 gradient-border">
            <div className="flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-brand-blue opacity-30 mb-6" />
              
              <p className="text-white/90 text-lg mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-purple">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-white/70">{testimonials[currentIndex].role}</p>
            </div>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white/80 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white/80 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
