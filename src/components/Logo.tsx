
import { useState, useEffect, useRef } from "react";
import { createImagePlaceholder } from "@/utils/imageUtils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  alt?: string;
}

const Logo = ({ size = "md", animate = true, alt = "Emotional Fitness Training Logo" }: LogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [placeholderSrc, setPlaceholderSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Use a transparent background version of the logo if available
  // Or fallback to the original logo
  const logoSrc = "/lovable-uploads/1db85eaa-05a2-472a-b647-749b000a7f41.png";
  
  useEffect(() => {
    let isMounted = true;
    
    // Generate a low quality placeholder
    const generatePlaceholder = async () => {
      try {
        const placeholder = await createImagePlaceholder(logoSrc, 20, 20);
        if (isMounted) {
          setPlaceholderSrc(placeholder);
        }
      } catch (error) {
        console.error("Failed to create placeholder:", error);
      }
    };
    
    // Only generate placeholder if image isn't already in browser cache
    if (!isLoaded && imgRef.current && !imgRef.current.complete) {
      generatePlaceholder();
    }
    
    return () => {
      isMounted = false;
    };
  }, [logoSrc]);
  
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  };

  return (
    <div 
      className={`${sizeClasses[size]} relative transition-opacity duration-300 rounded-full overflow-hidden ${!logoError ? 'bg-transparent' : 'bg-gray-100'}`}
      role="img"
      aria-label={alt}
    >
      {/* Low quality placeholder */}
      {placeholderSrc && !isLoaded && (
        <img 
          src={placeholderSrc}
          alt=""
          className="w-full h-full object-contain blur-sm absolute inset-0"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img 
        ref={imgRef}
        src={logoSrc} 
        alt={alt} 
        className={`w-full h-full object-contain ${animate ? 'animate-pulse-glow' : ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setLogoError(true);
          setIsLoaded(true);
        }}
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
};

export default Logo;
