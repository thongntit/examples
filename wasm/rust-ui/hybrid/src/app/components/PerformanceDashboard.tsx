'use client';

import { useEffect, useState } from 'react';
import type { PerformanceMetrics, PerformanceEvent } from '../utils/usePerformanceMetrics';

interface PerformanceDashboardProps {
  metrics: PerformanceMetrics;
  events: PerformanceEvent[];
  implementationType: 'react' | 'wasm';
}

export function PerformanceDashboard({
  metrics,
  events,
  implementationType
}: PerformanceDashboardProps) {
  const [collapsed, setCollapsed] = useState(false);
  
  // Format milliseconds to a readable format with 2 decimal places
  const formatTime = (ms: number | null) => {
    if (ms === null) return 'Not measured';
    return `${ms.toFixed(2)} ms`;
  };
  
  // Format bytes to a readable format (KB, MB)
  const formatBytes = (bytes: number | null) => {
    if (bytes === null) return 'Not available';
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };
  
  return (
    <div className="bg-white border rounded-lg shadow-sm mb-8">
      <div 
        className={`flex justify-between items-center p-4 cursor-pointer ${implementationType === 'wasm' ? 'bg-blue-50' : 'bg-green-50'}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <h2 className="text-lg font-semibold">
          Performance Metrics ({implementationType === 'wasm' ? 'WebAssembly' : 'React'})
        </h2>
        <button className="text-gray-500">
          {collapsed ? 'Expand ▼' : 'Collapse ▲'}
        </button>
      </div>
      
      {!collapsed && (
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Rendering Metrics */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Rendering</h3>
              <dl>
                <div className="flex justify-between py-1">
                  <dt className="text-gray-600">Initial Render:</dt>
                  <dd className="font-mono">{formatTime(metrics.initialRenderTime)}</dd>
                </div>
              </dl>
            </div>
            
            {/* Memory Usage */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Memory Usage</h3>
              <dl>
                <div className="flex justify-between py-1">
                  <dt className="text-gray-600">Heap Used:</dt>
                  <dd className="font-mono">{formatBytes(metrics.memoryUsage.usedJSHeapSize)}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-gray-600">Heap Total:</dt>
                  <dd className="font-mono">{formatBytes(metrics.memoryUsage.totalJSHeapSize)}</dd>
                </div>
              </dl>
            </div>
            
            {/* Interaction Performance */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Interactions</h3>
              <dl>
                <div className="flex justify-between py-1">
                  <dt className="text-gray-600">Pagination:</dt>
                  <dd className="font-mono">{formatTime(metrics.interactions.paginationTime)}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-gray-600">Add to Cart:</dt>
                  <dd className="font-mono">{formatTime(metrics.interactions.addToCartTime)}</dd>
                </div>
              </dl>
            </div>
          </div>
          
          {/* Recent Events */}
          <div>
            <h3 className="font-medium mb-2">Recent Events</h3>
            <div className="bg-gray-50 p-4 rounded-lg max-h-40 overflow-y-auto">
              {events.length === 0 ? (
                <p className="text-gray-500 text-center py-2">No events recorded yet</p>
              ) : (
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Event</th>
                      <th className="text-right pb-2">Duration (ms)</th>
                      <th className="text-right pb-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.slice().reverse().map((event, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-1">{event.name}</td>
                        <td className="text-right font-mono py-1">{event.duration.toFixed(2)}</td>
                        <td className="text-right py-1">
                          {new Date(event.timestamp).toLocaleTimeString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}