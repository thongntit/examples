import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border border-gray-600 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-200">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-200">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}