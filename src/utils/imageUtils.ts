
/**
 * Utility for handling and optimizing images
 */

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

// Add WebP and AVIF format support to image placeholders
export const createResponsivePlaceholder = async (
  src: string, 
  width = 20, 
  height = 20, 
  format: 'jpeg' | 'webp' | 'avif' = 'jpeg'
): Promise<string> => {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }
    
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
    
    // Draw the image at a smaller size
    ctx.drawImage(img, 0, 0, width, height);
    
    // Return the data URL with specified format and low quality
    return canvas.toDataURL(`image/${format}`, 0.1);
  } catch (error) {
    console.error("Failed to create responsive placeholder:", error);
    // Fallback to original method if new method fails
    return createImagePlaceholder(src, width, height);
  }
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

// Extend existing getCriticalAssets to support format checking
export const getCriticalAssets = (): string[] => {
  const baseAssets = [
    '/lovable-uploads/1db85eaa-05a2-472a-b647-749b000a7f41.png', // Logo
    '/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png', // Alan's image
  ];

  // Optional: Check browser support for WebP/AVIF
  const canvas = document.createElement('canvas');
  // Check if WebP is supported
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    // Potentially add WebP versions if available
    baseAssets.push(...baseAssets.map(asset => asset.replace('.png', '.webp')));
  }

  return baseAssets;
};
