export interface Product {
  id: number;
  title: string;
  category: string;
  country: string;
  brewery: string;
  ABV: string;
  IBU: string;
  price: {
    amount: string,
    discount?: string
  };
  description: string;
  images: string[];
}
