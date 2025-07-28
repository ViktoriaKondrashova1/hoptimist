import type { FC } from "react";
import {getCatalogProducts} from "@/modules/products/api/getCatalogProducts"
import {useRequest} from "@/shared/hooks/use-request"
import {ProductList} from "./components/ProductList/ProductList"
import {Product} from "@/modules/products/types/product-types"

export const CatalogPage: FC = () => {
  const {data: allProducts} = useRequest<Product[]>(getCatalogProducts)
    
  return (
    <>
      <ProductList products={allProducts}/>
    </>
  )
};
