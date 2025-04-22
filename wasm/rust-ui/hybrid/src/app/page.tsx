'use client';

import { Navigation } from './components/Navigation';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
          WebAssembly vs React.js Performance Comparison
        </h1>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">About This Comparison</h2>
          <p className="mb-4 text-gray-300">
            This application demonstrates a performance comparison between two implementations of the same UI:
            one built with WebAssembly (Rust) and one built with pure React.js.
          </p>
          <p className="mb-4 text-gray-300">
            Both implementations share the same visual design and functionality but differ in their underlying technology.
            The purpose is to compare performance characteristics like rendering time, memory usage, and interaction responsiveness.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-600 rounded-lg p-6 bg-blue-900">
              <h3 className="text-lg font-semibold mb-2 text-blue-200">WebAssembly Implementation</h3>
              <p className="mb-4 text-gray-300">
                The WebAssembly version uses Rust compiled to WASM. The product grid component is
                rendered using Rust code that's loaded asynchronously and interacts with the React application.
              </p>
              <div className="mt-4">
                <a
                  href="/wasm"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  View WASM Implementation
                </a>
              </div>
            </div>
            
            <div className="border border-gray-600 rounded-lg p-6 bg-green-900">
              <h3 className="text-lg font-semibold mb-2 text-green-200">React.js Implementation</h3>
              <p className="mb-4 text-gray-300">
                The React.js version uses pure React components without WebAssembly. The product grid is
                implemented using standard React components, hooks, and rendering.
              </p>
              <div className="mt-4">
                <a
                  href="/react"
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
                >
                  View React Implementation
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Performance Metrics Measured</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong className="text-gray-100">Rendering Time:</strong> How long it takes to render the initial UI</li>
            <li><strong className="text-gray-100">Memory Usage:</strong> How much memory is consumed by each implementation</li>
            <li><strong className="text-gray-100">Interaction Performance:</strong> How quickly the UI responds to user actions like pagination and adding items to cart</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
