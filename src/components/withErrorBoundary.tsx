
import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

interface WithErrorBoundaryOptions {
  fallback?: React.ReactNode;
  componentName?: string;
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  options: WithErrorBoundaryOptions = {}
): React.FC<P> {
  const { fallback, componentName = Component.displayName || Component.name } = options;
  
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <ErrorBoundary
        fallback={fallback}
        onError={(error, errorInfo) => {
          console.error(`Error in ${componentName}:`, error);
          // You could add additional context here
          error.message = `[${componentName}] ${error.message}`;
        }}
      >
        <Component {...props} />
      </ErrorBoundary>
    );
  };
  
  WrappedComponent.displayName = `withErrorBoundary(${componentName})`;
  
  return WrappedComponent;
}
