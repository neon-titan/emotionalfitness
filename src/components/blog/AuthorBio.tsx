
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const AuthorBio = () => {
  return (
    <Card className="border-white/10 bg-white/5 mb-12">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="/lovable-uploads/c1196310-1a24-4bd0-a6b3-959e052d81e7.png" 
              alt="Alan Muellegger" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Alan Muellegger</h3>
            <p className="text-white/80 mb-4">
              Alan Muellegger is an Emotional Fitness expert who helps high performers, entrepreneurs and executives
              optimize their emotions for peak performance. With over a decade of experience in personal development
              and coaching, Alan has developed proven methodologies that create lasting emotional transformation.
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/muellegger/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/AMuellegger" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/alan-muellegger" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
              <div className="ml-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-white/20 text-white hover:bg-white/5" 
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorBio;
