import { Pagination } from 'antd';
import { Category } from "../../categories/types/category-types";
import { Brewery } from "../../breweries/types/brewery-types";

export interface Product {
  ABV: number;
  IBU: number;
  averageRating: number;
  brewery: Brewery;
  breweryId: string;
  categories: Category[];
  commentsCount: number;
  country: string;
  createdAt: string;
  description: string;
  discount: number;
  id: string;
  images: string[];
  isDiscount: boolean;
  offPercent: number;
  price: number;
  title: string;
  updatedAt: string;
}

export interface Pagination {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export interface AllProductsPesponse {
  success: boolean;
  data: Product[];
  message: string;
  pagination: Pagination;
  statusCode: number
}
