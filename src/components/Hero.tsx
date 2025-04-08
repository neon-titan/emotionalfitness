
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white z-0"></div>
      
      {/* The shiny chrome "TRAINING" text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[240px] font-extrabold opacity-10 text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 select-none z-0">
        TRAINING
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your Emotions, Master Your Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Emotional fitness training to help you build resilience, manage stress, and improve your overall wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/alan-muellegger/emotional-fitness-session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto">
                Book Now
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
