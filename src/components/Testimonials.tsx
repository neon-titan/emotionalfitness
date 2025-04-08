import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Karen Thekraken",
    role: "Leadership Coach",
    content: "Alan's emotional fitness training completely transformed how I handle stress and make decisions under pressure. Working with him took me to deeper levels of self-awareness than I thought possible. His guidance helped me navigate challenging situations with clarity and purpose, and my team has noticed a significant improvement in my leadership. I'm truly grateful for this journey.",
    image: "/lovable-uploads/698b6461-b40d-447a-b58e-49ae155ad21a.png"
  },
  {
    id: 2,
    name: "Ben Hale",
    role: "Coach & Creator",
    content: "On our first call, Alan gave me one simple shift — I raised my price, and the next day I closed a client, paid in full. My posts improved, my energy changed, and I felt more confident showing up. I'm making more money and doing it from a grounded place.",
    image: "/lovable-uploads/0eb52a72-5ee0-4e5a-8251-e61bd4989dc7.png"
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
