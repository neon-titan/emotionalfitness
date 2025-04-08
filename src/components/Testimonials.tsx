
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    content: "The emotional fitness training has transformed how I handle stress at work. I'm more focused, resilient, and my team has noticed the positive change in my leadership.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Healthcare Professional",
    content: "Working in healthcare is emotionally demanding. These techniques have helped me maintain my empathy while protecting my own wellbeing. Truly life-changing.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Parent & Entrepreneur",
    content: "Balancing family and business was taking a toll on me. Now I have practical tools to manage my emotions and be more present both at home and work.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from people who have transformed their emotional wellbeing through our training
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
