
import { useState } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const Logo = ({ size = "md", animate = true }: LogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // Use a transparent background version of the logo if available
  // Or fallback to the original logo
  const logoSrc = "/lovable-uploads/1db85eaa-05a2-472a-b647-749b000a7f41.png";
  
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  };

  return (
    <div className={`${sizeClasses[size]} relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 rounded-full overflow-hidden ${!logoError ? 'bg-transparent' : 'bg-gray-100'}`}>
      <img 
        src={logoSrc} 
        alt="Emotional Fitness Training Logo" 
        className={`w-full h-full object-contain ${animate ? 'animate-pulse-glow' : ''}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setLogoError(true);
          setIsLoaded(true);
        }}
      />
    </div>
  );
};

export default Logo;
