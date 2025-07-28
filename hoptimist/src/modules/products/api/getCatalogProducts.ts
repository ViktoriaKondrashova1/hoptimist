import { API_ENDPOINT, CATALOG_PAGE_LIMIT } from "@/shared/constants/constants";
import { Product } from "@/modules/products/types/product-types";

export const getCatalogProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_ENDPOINT}/products?page=1&limit=${CATALOG_PAGE_LIMIT}`);
    const jsonData = await response.json();
    return jsonData.data;
  } catch (err) {
    throw new Error(`Failed to load catalog products: ${err}`);
  }
};