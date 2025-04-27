export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
  tags: string[];
};

export type CartItem = Product & {
  quantity: number;
};