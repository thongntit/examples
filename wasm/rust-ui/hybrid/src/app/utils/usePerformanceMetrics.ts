'use client';

import { useEffect, useRef, useState } from 'react';

export interface PerformanceMetrics {
  initialRenderTime: number | null;
  memoryUsage: {
    usedJSHeapSize: number | null;
    totalJSHeapSize: number | null;
  };
  interactions: {
    paginationTime: number | null;
    addToCartTime: number | null;
  };
}

export interface PerformanceEvent {
  name: string;
  duration: number;
  timestamp: number;
}

interface UsePerformanceMetricsProps {
  implementationType: 'react' | 'wasm';
}

/**
 * Hook for tracking performance metrics
 */
export function usePerformanceMetrics({ implementationType }: UsePerformanceMetricsProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    initialRenderTime: null,
    memoryUsage: {
      usedJSHeapSize: null,
      totalJSHeapSize: null,
    },
    interactions: {
      paginationTime: null,
      addToCartTime: null,
    }
  });

  const [events, setEvents] = useState<PerformanceEvent[]>([]);
  const mountTimeRef = useRef<number>(performance.now());
  const interactionTimerRef = useRef<{ [key: string]: number }>({});

  // Measure initial render time
  useEffect(() => {
    const renderTime = performance.now() - mountTimeRef.current;
    
    setMetrics(prev => ({
      ...prev,
      initialRenderTime: renderTime
    }));

    addEvent('initialRender', renderTime);

    // Start memory usage tracking if available
    if (window.performance && 'memory' in window.performance) {
      trackMemoryUsage();
    }

    return () => {
      // Clean up any performance observers or timers here
    };
  }, []);

  // Function to periodically track memory usage
  const trackMemoryUsage = () => {
    // Type assertion for performance.memory which is not in standard TS types
    const performanceMemory = (performance as any).memory;
    
    if (performanceMemory) {
      const memorySnapshot = {
        usedJSHeapSize: performanceMemory.usedJSHeapSize,
        totalJSHeapSize: performanceMemory.totalJSHeapSize
      };
      
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memorySnapshot
      }));
      
      // Schedule next memory snapshot
      setTimeout(trackMemoryUsage, 5000); // Check every 5 seconds
    }
  };

  /**
   * Start timing an interaction
   */
  const startInteractionTimer = (interactionType: string) => {
    interactionTimerRef.current[interactionType] = performance.now();
  };

  /**
   * End timing an interaction and record the duration
   */
  const endInteractionTimer = (interactionType: string) => {
    if (interactionTimerRef.current[interactionType]) {
      const startTime = interactionTimerRef.current[interactionType];
      const duration = performance.now() - startTime;
      
      // Add to performance events
      addEvent(`${interactionType}`, duration);
      
      // Update specific metrics based on interaction type
      if (interactionType === 'pagination') {
        setMetrics(prev => ({
          ...prev,
          interactions: {
            ...prev.interactions,
            paginationTime: duration
          }
        }));
      } else if (interactionType === 'addToCart') {
        setMetrics(prev => ({
          ...prev,
          interactions: {
            ...prev.interactions,
            addToCartTime: duration
          }
        }));
      }
      
      // Clear the timer reference
      delete interactionTimerRef.current[interactionType];
    }
  };

  /**
   * Add an event to the performance events list
   */
  const addEvent = (name: string, duration: number) => {
    const newEvent: PerformanceEvent = {
      name: `${implementationType}:${name}`,
      duration,
      timestamp: Date.now()
    };
    
    setEvents(prev => [...prev, newEvent]);
    
    // Also log to console for debugging
    console.log(`Performance [${implementationType}] - ${name}: ${duration.toFixed(2)}ms`);
  };

  return {
    metrics,
    events,
    startInteractionTimer,
    endInteractionTimer
  };
}