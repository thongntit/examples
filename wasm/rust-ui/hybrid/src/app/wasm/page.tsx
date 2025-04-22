"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { mockProducts } from "../data/mockProducts";
import { Navigation } from "../components/Navigation";
import { PerformanceDashboard } from "../components/PerformanceDashboard";
import { usePerformanceMetrics } from "../utils/usePerformanceMetrics";

// We need to use dynamic import with SSR disabled for the WebAssembly component
// as WebAssembly loading requires client-side capabilities
const RustProductGrid = dynamic(() => import("../components/RustProductGrid"), {
  ssr: false,
  loading: () => (
    <div className="text-center py-12 border rounded-lg">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-8 w-3/4 mb-6 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="h-40 rounded-md mb-4"></div>
                <div className="h-6rounded mb-2 w-3/4"></div>
                <div className="h-4 rounded mb-4 w-full"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 rounded w-1/4"></div>
                  <div className="h-8 rounded w-1/3"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  ),
});

export default function WasmPage() {
  // Performance metrics
  const { metrics, events, startInteractionTimer, endInteractionTimer } =
    usePerformanceMetrics({ implementationType: "wasm" });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Cart state
  const [cart, setCart] = useState<any[]>([]);

  // Handle page change with performance measurement
  const handlePageChange = (page: number) => {
    startInteractionTimer("pagination");
    setCurrentPage(page);
    // We need a small delay to properly measure the time after the state update and re-render
    setTimeout(() => {
      endInteractionTimer("pagination");
    }, 50);
  };

  // Handle adding product to cart with performance measurement
  const handleAddToCart = (product: any) => {
    startInteractionTimer("addToCart");

    setCart((prevCart) => {
      // Check if product is already in cart
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase quantity if product already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // End timing after state update
    setTimeout(() => {
      endInteractionTimer("addToCart");
    }, 50);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation />

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
        WebAssembly Implementation
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">
          Products (WebAssembly Component)
        </h2>
        <div id="rust-product-grid-container" className="wasm-product-grid">
          {/* Content will be populated by Rust/WebAssembly */}
          <RustProductGrid
            products={mockProducts}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      {/* Cart Information (React Component) */}
      <div className="bg-gray-800 mb-8 border border-gray-700 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-200">
          Cart ({cart.reduce((sum, item) => sum + (item.quantity || 0), 0)}{" "}
          items)
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-400 py-4 text-center">Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-700">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="object-cover w-full h-full rounded"
                      />
                    </div>
                    <span className="font-medium text-gray-200">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </div>
                    <div className="font-bold text-gray-100">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right font-bold text-lg border-t border-gray-700 pt-4 text-gray-100">
              Total: $
              {cart
                .reduce(
                  (sum, item) => sum + item.price * (item.quantity || 0),
                  0
                )
                .toFixed(2)}
            </div>
          </>
        )}
      </div>

      {/* Performance Dashboard */}
      <PerformanceDashboard
        metrics={metrics}
        events={events}
        implementationType="wasm"
      />
    </div>
  );
}
