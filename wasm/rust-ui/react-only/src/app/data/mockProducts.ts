import { Product } from '../types/product';

const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys'];
const adjectives = ['Premium', 'Deluxe', 'Essential', 'Classic', 'Modern', 'Professional', 'Ultimate'];
const productTypes = [
  'Laptop', 'Smartphone', 'Headphones',
  'T-Shirt', 'Jeans', 'Jacket',
  'Novel', 'Cookbook', 'Biography',
  'Chair', 'Lamp', 'Desk',
  'Basketball', 'Tennis Racket', 'Yoga Mat',
  'Board Game', 'Action Figure', 'Puzzle'
];

function generateMockProduct(id: number): Product {
  const category = categories[Math.floor(id / 200) % categories.length];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const productType = productTypes[Math.floor(id / 60) % productTypes.length];
  const name = `${adjective} ${productType}`;
  
  return {
    id: id.toString(),
    name,
    price: Math.floor(Math.random() * 900) + 100, // Price between 100 and 999
    imageUrl: `https://picsum.photos/seed/${id}/400/400`, // Random image for each product
    description: `High-quality ${name.toLowerCase()} perfect for everyday use. Features premium materials and exceptional craftsmanship.`,
    category,
    tags: [category.toLowerCase(), productType.toLowerCase(), adjective.toLowerCase()]
  };
}

// Generate 1000+ products
export const mockProducts: Product[] = Array.from({ length: 1024 }, (_, index) => 
  generateMockProduct(index + 1)
);

// Helper function to filter products
export function filterProducts(products: Product[], searchQuery: string): Product[] {
  const query = searchQuery.toLowerCase().trim();
  if (!query) return products;
  
  return products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.tags.some(tag => tag.includes(query))
  );
}