'use client';

import { useState, useMemo, useEffect } from 'react';
import { CartSummary } from './components/CartSummary';
import { SearchBar } from './components/SearchBar';
import { ProductGrid } from './components/ProductGrid';
import { useCart } from './hooks/useCart';
import { mockProducts, filterProducts } from './data/mockProducts';

const ITEMS_PER_PAGE = 12;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { cartItems, addToCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    return filterProducts(mockProducts, searchQuery);
  }, [searchQuery]);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset page when search changes
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with cart summary */}
      <header className="sticky top-0 z-10 shadow-sm bg-white">
        <CartSummary items={cartItems} />
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Product Catalog
        </h1>

        {/* Search bar */}
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search products by name, category, or description..."
        />

        {/* Product grid with pagination */}
        <ProductGrid
          products={filteredProducts}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
          onAddToCart={addToCart}
        />

        {/* Show total results */}
        <div className="text-center text-gray-600 mt-4">
          Showing {filteredProducts.length} products
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 border-t">
        <p>React Product Listing Demo</p>
      </footer>
    </div>
  );
}
