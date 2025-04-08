
import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <Logo size="sm" animate={false} />
              <div>
                <h3 className="text-xl font-bold gradient-text">EMOTIONAL FITNESS</h3>
                <p className="text-white/70 text-sm">By Alan Muellegger</p>
              </div>
            </div>
            <p className="text-white/60 mt-4 text-center md:text-left max-w-xs">
              Optimize your emotions for peak performance in all areas of your life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/70 hover:text-brand-blue transition-colors">Services</a></li>
                <li><a href="#about" className="text-white/70 hover:text-brand-blue transition-colors">About</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-brand-blue transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-brand-blue transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-brand-blue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-brand-blue transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-brand-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-brand-blue transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {currentYear} Emotional Fitness Training. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
