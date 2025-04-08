
import { useState, useEffect } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const Logo = ({ size = "md", animate = true }: LogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  };

  return (
    <div className={`${sizeClasses[size]} relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 rounded-full overflow-hidden`}>
      <img 
        src="/lovable-uploads/c1196310-1a24-4bd0-a6b3-959e052d81e7.png" 
        alt="Emotional Fitness Training Logo" 
        className={`w-full h-full object-contain ${animate ? 'animate-pulse-glow' : ''}`}
      />
    </div>
  );
};

export default Logo;
