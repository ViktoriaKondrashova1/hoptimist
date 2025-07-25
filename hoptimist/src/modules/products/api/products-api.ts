import { API_ENDPOINT } from "@/shared/constants/constants";
import { Product } from "@/modules/products/types/product-types";

export const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_ENDPOINT}/products/featured`);
    const jsonData = await response.json();
    return jsonData.data;
  } catch (err) {
    throw new Error(`Failed to load featured products: ${err}`);
  }
};
