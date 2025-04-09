
import { createImagePlaceholder } from './imageUtils';

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

// Extend existing getCriticalAssets to support format checking
export const getCriticalAssets = (): string[] => {
  const baseAssets = [
    '/lovable-uploads/1db85eaa-05a2-472a-b647-749b000a7f41.png', // Logo
    '/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png', // Alan's image
  ];

  // Optional: Check browser support for WebP/AVIF
  if ('image/webp' in document.createElement('canvas').toDataURL()) {
    // Potentially add WebP versions if available
    baseAssets.push(...baseAssets.map(asset => asset.replace('.png', '.webp')));
  }

  return baseAssets;
};
