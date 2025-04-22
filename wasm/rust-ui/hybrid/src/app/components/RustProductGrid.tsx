"use client";

import { useEffect, useState } from "react";
import type { Product } from "../types/product";

// Define the Rust version of Product type - note the snake_case for imageUrl
interface RustProduct {
  id: string;
  name: string;
  price: number;
  image_url: string; // This matches Rust's naming convention
  description: string;
  category: string;
  tags: string[];
}

// Convert from React/TypeScript naming to Rust naming convention
function convertToRustProduct(product: Product): RustProduct {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.imageUrl, // Convert camelCase to snake_case
    description: product.description,
    category: product.category,
    tags: product.tags,
  };
}

interface RustProductGridProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onAddToCart: (product: Product) => void;
}

export default function RustProductGrid({
  products,
  currentPage,
  itemsPerPage,
  onPageChange,
  onAddToCart,
}: RustProductGridProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Convert products to Rust format
  const rustProducts = products.map(convertToRustProduct);

  useEffect(() => {
    // Define callbacks that Rust can call
    // These need to be defined on the window object
    (window as any).rustPageChange = (page: number) => {
      onPageChange(page);
    };

    (window as any).rustAddToCart = (productId: string) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        onAddToCart(product);
      }
    };

    async function loadWasm() {
      try {
        setLoading(true);

        // Import and initialize the WASM module
        const wasmModule = await import("../../../rust/pkg");
        await wasmModule.default(); // Initialize the module

        // Initialize panic hook for better error messages
        wasmModule.init_panic_hook();

        // Render the product grid using the exported Rust function
        try {
          wasmModule.render_product_grid(
            rustProducts,
            currentPage,
            itemsPerPage
          );
          console.log("WebAssembly product grid rendered successfully");
        } catch (renderError) {
          console.error("Error rendering product grid:", renderError);
          setError(
            `Error rendering WebAssembly component: ${
              renderError instanceof Error
                ? renderError.message
                : String(renderError)
            }`
          );
        }

        setLoading(false);
      } catch (err) {
        console.error("Failed to load WASM module:", err);
        setError(
          `Failed to load WebAssembly component: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
        setLoading(false);
      }
    }

    loadWasm();

    // Cleanup function to remove global window properties
    return () => {
      delete (window as any).rustPageChange;
      delete (window as any).rustAddToCart;
    };
  }, [
    rustProducts,
    currentPage,
    itemsPerPage,
    onPageChange,
    onAddToCart,
    products,
  ]);

  // Handle loading state
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-2"></div>
        Loading WebAssembly component...
      </div>
    );
  }

  // Handle error state
  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  // The actual content will be rendered by the Rust WebAssembly code
  // We just provide the container element with the expected ID
  return null;
}
