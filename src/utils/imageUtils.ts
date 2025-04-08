
/**
 * Utility for handling and optimizing images
 */

/**
 * Loads an image from a Blob and creates an HTMLImageElement
 * @param file The image file as a Blob
 * @returns Promise resolving to the loaded HTMLImageElement
 */
export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Creates a low-quality image placeholder until the full image loads
 * @param src URL of the original image
 * @param width Desired width of the placeholder
 * @param height Desired height of the placeholder
 * @returns Data URL of the low-quality image placeholder
 */
export const createImagePlaceholder = async (
  src: string,
  width = 20,
  height = 20
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Create small canvas for the placeholder
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      
      // Draw the image at a smaller size
      ctx.drawImage(img, 0, 0, width, height);
      
      // Return the data URL
      resolve(canvas.toDataURL("image/jpeg", 0.1));
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Determines if an image should be lazy loaded based on its position
 * @param element The target element to check
 * @returns Boolean indicating if the element should be lazy loaded
 */
export const shouldLazyLoad = (element: HTMLElement): boolean => {
  // If IntersectionObserver is not available (old browsers), don't lazy load
  if (!('IntersectionObserver' in window)) return false;
  
  // Check if image is near viewport
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Load immediately if within 500px of viewport
  return rect.top > viewportHeight + 500;
};

/**
 * Analyzes the critical path assets that need to be preloaded
 * @returns Array of asset URLs that should be preloaded
 */
export const getCriticalAssets = (): string[] => {
  // Here you could implement logic to determine which 
  // assets are critical for the initial render
  return [
    '/lovable-uploads/1db85eaa-05a2-472a-b647-749b000a7f41.png', // Logo
    '/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png', // Alan's image
  ];
};
