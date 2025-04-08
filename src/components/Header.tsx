import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-white/80 hover:text-white transition-colors ${
        active ? 'text-white font-semibold' : ''
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-none"
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMobile();
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/#services" isActive={false}>Services</NavLink>
            <NavLink to="/#about" isActive={false}>About</NavLink>
            <NavLink to="/#testimonials" isActive={false}>Testimonials</NavLink>
            <NavLink to="/#pricing" isActive={false}>Pricing</NavLink>
            <NavLink to="/blog" isActive={isActive('/blog')}>Blog</NavLink>
            <NavLink to="/#contact" isActive={false}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink to="/#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/#testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
              <MobileNavLink to="/#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink to="/#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all" onClick={() => {
                  window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank');
                  setIsOpen(false);
                }}>
                  Book a Session
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
