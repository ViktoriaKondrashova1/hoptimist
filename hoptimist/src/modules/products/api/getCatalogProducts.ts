import { API_ENDPOINT, CATALOG_PAGE_LIMIT } from "@/shared/constants/constants";
import { AllProductsPesponse } from "@/modules/products/types/product-types";

export const getCatalogProducts = async (pageNumber: number): Promise<AllProductsPesponse> => {
  try {
    const response = await fetch(`${API_ENDPOINT}/products?page=${pageNumber}&limit=${CATALOG_PAGE_LIMIT}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    throw new Error(`Failed to load catalog products: ${err}`);
  }
};