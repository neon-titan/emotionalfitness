
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              EMOTIONAL FITNESS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/#features" className="font-medium hover:text-primary">
              Services
            </Link>
            <Link to="/#about" className="font-medium hover:text-primary">
              About
            </Link>
            <Link to="/#testimonials" className="font-medium hover:text-primary">
              Testimonials
            </Link>
            <a
              href="https://calendly.com/alan-muellegger/emotional-fitness-session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Book a Session</Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/#features"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/#about"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/#testimonials"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <a
              href="https://calendly.com/alan-muellegger/emotional-fitness-session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="w-full">Book a Session</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
