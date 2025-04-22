import Image from 'next/image';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { name, price, imageUrl, description } = product;
  
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}