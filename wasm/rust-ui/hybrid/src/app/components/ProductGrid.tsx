'use client';

import { useMemo } from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ 
  products, 
  currentPage, 
  itemsPerPage, 
  onPageChange, 
  onAddToCart 
}: ProductGridProps) {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [products, currentPage, itemsPerPage, totalPages]);

  // Don't render pagination if there's only one page
  const shouldShowPagination = totalPages > 1;

  const renderPaginationButtons = () => {
    if (!shouldShowPagination) return null;

    return (
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          Next
        </button>
      </div>
    );
  };

  // Handle empty state
  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No products found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      {renderPaginationButtons()}
    </div>
  );
}