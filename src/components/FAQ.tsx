
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What exactly is Emotional Fitness Training?",
    answer: "Emotional Fitness Training is a structured approach to developing your ability to regulate and optimize your emotional state. It's not therapy or traditional mindset work—it's practical training for your nervous system, emotional responses, and inner state, similar to how physical fitness trains your body."
  },
  {
    question: "How is this different from therapy or coaching?",
    answer: "Unlike therapy, which often focuses on healing past trauma, or traditional coaching that focuses on strategy and accountability, Emotional Fitness Training emphasizes building specific emotional capabilities. We focus on developing skills to manage your emotional state in real-time, enhancing performance, creativity, and resilience."
  },
  {
    question: "What happens in a typical session?",
    answer: "A typical session begins with an assessment of your current emotional state and specific challenges you're facing. We then work through tailored exercises designed to strengthen your emotional regulation capabilities. Sessions are interactive, practical, and focused on tangible skills you can apply immediately in your life or business."
  },
  {
    question: "How long does it take to see results?",
    answer: "Many clients report noticeable improvements in their emotional regulation and decision-making after just 2-3 sessions. However, like physical fitness, lasting results come from consistent practice. For significant transformation, most clients engage in a 3-6 month program of regular sessions combined with daily practice."
  },
  {
    question: "Is this suitable for teams or organizations?",
    answer: "Absolutely. Emotional Fitness Training works exceptionally well in organizational settings where team performance, leadership, and culture are priorities. We offer specialized programs for teams that focus on collective emotional intelligence and resilience."
  },
  {
    question: "Do you offer online/remote sessions?",
    answer: "Yes, all sessions are available online via secure video conferencing, making it accessible regardless of your location. This flexibility allows clients to engage in sessions from their preferred environment."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We understand that schedules can change. We request 24 hours notice for any cancellations or rescheduling. Late cancellations (less than 24 hours) or missed sessions are charged at the full session rate."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">
          Frequently Asked Questions
        </h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
          Get answers to common questions about Emotional Fitness Training and how it can help you.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-muted/20 rounded-lg overflow-hidden p-1">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-white hover:text-brand-blue py-5 px-4 text-left font-medium transition-all">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 px-4 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 mb-2">
            Have a question that's not answered here?
          </p>
          <a 
            href="#contact" 
            className="text-brand-blue hover:text-brand-purple transition-colors font-medium"
          >
            Get in touch with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
