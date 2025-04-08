
# Emotional Fitness Website Developer Guide

## Project Overview
This is a React-based website for an emotional fitness coaching business. The site is built with React, TypeScript, Vite, and TailwindCSS, with UI components from shadcn/ui.

## Project Structure

```
src/
├── components/            # React components
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── sections/          # Page section components (Hero, Services, etc.)
│   ├── ui/                # UI components from shadcn/ui
│   └── Logo.tsx           # Logo component
├── hooks/                 # Custom React hooks
├── integrations/          # Third-party integrations
│   └── supabase/          # Supabase client and types
├── lib/                   # Utility libraries
├── pages/                 # Page components
├── utils/                 # Utility functions and constants
├── App.tsx                # Main App component
└── main.tsx               # Application entry point
```

## Key Technologies

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Component library
- **React Router**: Routing
- **React Query**: Data fetching
- **React Helmet Async**: SEO management
- **Supabase**: Backend-as-a-Service

## SEO Implementation

The project uses React Helmet Async for managing SEO tags across the site:

1. **SEO Component**: The `SEO.tsx` component centralizes all meta tag management
2. **Per-page SEO**: Each page imports and uses the SEO component with custom props
3. **robots.txt**: Controls search engine crawling behavior
4. **Metadata Constants**: SEO content is stored in `constants.ts` for easy updates

## Component Design Principles

1. **Single Responsibility**: Each component should do one thing well.
2. **Composability**: Prefer composition over inheritance.
3. **Reusability**: Components should be designed for reuse when possible.
4. **Isolation**: Components should be isolated from each other.

## Styling

- Use TailwindCSS utility classes for styling
- Follow the existing color scheme (brand-blue, brand-purple, brand-pink)
- Use gradient effects for emphasis
- Ensure all components are fully responsive

## Adding a New Page

1. Create a new file in the `pages/` directory
2. Add a route in `App.tsx`
3. Update navigation links in the Header component if needed
4. Add proper SEO implementation using the SEO component

Example:

```tsx
// src/pages/NewPage.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Page Title"
        description="Page description"
        keywords="keyword1, keyword2"
        canonical="https://emotionalfitness.com/page-path/"
      />
      <Header />
      {/* Page content */}
      <Footer />
    </div>
  );
};

export default NewPage;
```

## Adding a New Section

1. Create a new file in the `components/sections/` directory
2. Import and use it in a page component

## Deployment

The site is deployed using Lovable's publishing feature, which creates a production build and deploys it to a hosting service.

To deploy:
1. Click on "Share" in the Lovable interface
2. Click on "Publish"

## External Services

- **Calendly**: Used for booking sessions
- **Social Media**: Links to various social media platforms

## Constants and Configuration

Common values (URLs, text, etc.) are centralized in `src/utils/constants.ts` to make updates easier.

## Best Practices

1. **Keep Components Small**: Break large components into smaller, focused ones
2. **Use TypeScript**: Leverage TypeScript for type safety
3. **Document Your Code**: Add JSDoc comments to functions and components
4. **Follow Naming Conventions**: Use PascalCase for components, camelCase for variables
5. **Centralize Constants**: Put all constants in one place for easy updates
6. **Optimize Images**: Use compressed and appropriately sized images
7. **Accessibility**: Ensure the site is accessible (proper contrast, semantic HTML, etc.)
8. **SEO Optimization**: Use proper heading structure (h1, h2, etc.) and semantic HTML

## Custom Domain Setup

When connecting a custom domain:
1. Add the domain in Lovable's project settings
2. Set up the appropriate DNS records at your domain registrar
3. Wait for DNS propagation (can take 24-48 hours)
4. Verify connection in Lovable

## Troubleshooting

If you encounter issues:
1. Check the console for errors
2. Verify that all imports resolve correctly
3. Check that all required dependencies are installed
4. Ensure that all components receive their required props

## Performance Optimization

The site uses several techniques to optimize performance:
1. Image preloading for critical assets
2. Code splitting via React Router
3. Optimized TailwindCSS configuration
4. Responsive image handling
