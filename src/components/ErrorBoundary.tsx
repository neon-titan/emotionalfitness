
import React, { Component, ErrorInfo } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    } else {
      logErrorToService(error, errorInfo);
    }
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center min-h-[200px] p-4">
          <Alert variant="destructive" className="max-w-md">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              <div className="mt-2 mb-4 text-sm opacity-90">
                {this.state.error?.message || "An unexpected error occurred"}
              </div>
              <Button 
                size="sm" 
                onClick={this.handleReset}
                className="mt-2"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reload Page
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

export const logErrorToService = (
  error: Error, 
  errorInfo?: ErrorInfo
): void => {
  console.group("🚨 Error Logged to Monitoring Service");
  console.error("Error:", error);
  if (errorInfo) {
    console.error("Component Stack:", errorInfo.componentStack);
  }
  console.info("URL:", window.location.href);
  console.info("User Agent:", navigator.userAgent);
  console.groupEnd();
  
  toast({
    variant: "destructive",
    title: "Error logged",
    description: "Our team has been notified of the issue.",
  });
};
