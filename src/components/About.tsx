
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Alan Muellegger - Emotional Fitness Coach" 
                className="w-full h-auto object-cover aspect-[4/3]" 
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h6 className="text-brand-blue uppercase tracking-wider font-semibold mb-2">About</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Alan Muellegger</h2>
            <p className="text-white/80 mb-4">
              With over 15 years of experience as an emotional fitness coach, I've helped hundreds of clients 
              break through mental barriers and achieve peak performance in their personal and professional lives.
            </p>
            <p className="text-white/80 mb-6">
              My unique approach combines cutting-edge neuroscience, practical psychology, and time-tested wisdom to help you 
              optimize your emotional state for maximum performance, creativity, and fulfillment.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-white/10 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-brand-blue mb-1">300+</h4>
                <p className="text-white/60 text-sm">Clients Coached</p>
              </div>
              <div className="border border-white/10 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-brand-purple mb-1">15+</h4>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
