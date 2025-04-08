
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 z-10"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-blue rounded-tl-xl z-20"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-brand-purple rounded-tr-xl z-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-brand-purple rounded-bl-xl z-20"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-pink rounded-br-xl z-20"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main image */}
              <img 
                src="/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png" 
                alt="Alan Muellegger - Emotional Fitness Coach" 
                className="w-full h-auto object-cover z-0 aspect-[4/5]" 
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
              <div className="border border-white/10 bg-white/5 p-4 rounded-lg hover:border-brand-blue/50 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-brand-blue mb-1">300+</h4>
                <p className="text-white/60 text-sm">Clients Coached</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 rounded-lg hover:border-brand-purple/50 hover:bg-white/10 transition-all duration-300">
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
