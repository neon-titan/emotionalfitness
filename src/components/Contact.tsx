
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Connect With Me</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ready to start your emotional fitness journey? Reach out directly or connect on social media.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-4xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-brand-blue" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a href="mailto:alan.muellegger@gmail.com" className="text-white/70 hover:text-brand-blue transition-colors">
                    alan.muellegger@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-brand-blue" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a href="tel:+18476248389" className="text-white/70 hover:text-brand-blue transition-colors">
                    (847) 624-8389
                  </a>
                </div>
              </div>
              
              <Button 
                className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all w-full md:w-auto mt-4"
                onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
                size="lg"
              >
                Schedule a Session
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-white font-semibold mb-6 text-center md:text-left">Follow on Social Media</h3>
            <div className="grid grid-cols-2 gap-6">
              <a 
                href="https://www.instagram.com/muellegger/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Instagram size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">Instagram</span>
              </a>
              
              <a 
                href="https://twitter.com/AMuellegger" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Twitter size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">Twitter</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/alan-muellegger" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Linkedin size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">LinkedIn</span>
              </a>
              
              <a 
                href="https://www.facebook.com/alan.muellegger/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Facebook size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
