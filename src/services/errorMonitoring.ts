import type { ErrorInfo } from "react";

interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  url: string;
  timestamp: number;
  userAgent: string;
  additionalInfo?: Record<string, unknown>;
}

class ErrorMonitoringService {
  private static instance: ErrorMonitoringService;
  private isInitialized = false;
  private errorQueue: ErrorDetails[] = [];
  private readonly MAX_QUEUE_SIZE = 10;
  private readonly FLUSH_INTERVAL = 30000; // 30 seconds
  private flushIntervalId: number | null = null;

  private constructor() {
    // Private constructor for singleton pattern
  }

  public static getInstance(): ErrorMonitoringService {
    if (!ErrorMonitoringService.instance) {
      ErrorMonitoringService.instance = new ErrorMonitoringService();
    }
    return ErrorMonitoringService.instance;
  }

  public init(appEnvironment = 'development'): void {
    if (this.isInitialized) return;

    // Set up global error handlers
    window.addEventListener('error', this.handleGlobalError.bind(this));
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));

    // Set up interval to flush errors
    this.flushIntervalId = window.setInterval(() => {
      this.flushErrors();
    }, this.FLUSH_INTERVAL);

    this.isInitialized = true;
    console.info(`🔍 Error monitoring initialized (${appEnvironment})`);
  }

  public captureError(
    error: Error, 
    errorInfo?: ErrorInfo, 
    additionalInfo?: Record<string, unknown>
  ): void {
    const errorDetails: ErrorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      additionalInfo
    };

    this.errorQueue.push(errorDetails);
    
    // Keep queue size under control
    if (this.errorQueue.length > this.MAX_QUEUE_SIZE) {
      this.flushErrors();
    }
    
    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.group('Error captured by monitoring service');
      console.error(error);
      if (errorInfo) console.error(errorInfo);
      console.groupEnd();
    }
  }

  public captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info'): void {
    const details: ErrorDetails = {
      message: `[${level.toUpperCase()}] ${message}`,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };
    
    this.errorQueue.push(details);
  }

  private handleGlobalError(event: ErrorEvent): void {
    event.preventDefault();
    const error = new Error(event.message);
    error.stack = event.error?.stack;
    
    this.captureError(error, undefined, {
      lineNo: event.lineno,
      colNo: event.colno,
      filename: event.filename
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    event.preventDefault();
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(String(event.reason));
    
    this.captureError(error, undefined, {
      type: 'unhandledRejection'
    });
  }

  private flushErrors(): void {
    if (this.errorQueue.length === 0) return;
    
    // In a real implementation, this would send errors to a backend service
    // For now, we'll just log them to console
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📤 Flushing ${this.errorQueue.length} errors to monitoring service`);
    }
    
    // Here you would normally send the errors to a backend
    // this.sendErrorsToBackend(this.errorQueue);
    
    // Clear the queue
    this.errorQueue = [];
  }

  public shutdown(): void {
    if (this.flushIntervalId !== null) {
      window.clearInterval(this.flushIntervalId);
    }
    // Flush any remaining errors
    this.flushErrors();

    window.removeEventListener('error', this.handleGlobalError);
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
    
    this.isInitialized = false;
  }
}

// Export a singleton instance
export const errorMonitoring = ErrorMonitoringService.getInstance();

// Helper function to gracefully capture exceptions
export function tryCatch<T>(fn: () => T, fallback: T, errorMessage = 'Operation failed'): T {
  try {
    return fn();
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    error.message = `${errorMessage}: ${error.message}`;
    errorMonitoring.captureError(error);
    return fallback;
  }
}
