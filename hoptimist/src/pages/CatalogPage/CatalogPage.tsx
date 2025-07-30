import { type FC, useCallback, useEffect } from 'react';
import {getCatalogProducts} from "@/modules/products/api/getCatalogProducts"
import {useRequest} from "@/shared/hooks/use-request"
import {ProductList} from "./components/ProductList/ProductList"
import {AllProductsPesponse} from "@/modules/products/types/product-types"
import {AppPagination} from "@/shared/components/ui/AppPagination/AppPagination"
import {useCatalogPage} from "./hooks/useCatalogPage"

export const CatalogPage: FC = () => {
  const { currentPage, handlePageChange } = useCatalogPage()
  const fetchCatalogProducts = useCallback(() => getCatalogProducts(currentPage), [currentPage])
  const {data: productsResponse} = useRequest<AllProductsPesponse>(fetchCatalogProducts)
  const allProducts = productsResponse?.data
  const catalogPagination = productsResponse?.pagination

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])
    
  return (
    <>
      <ProductList products={allProducts}/>
      <AppPagination 
        current={catalogPagination?.page} 
        total={catalogPagination?.total} 
        pageSize={catalogPagination?.limit} 
        onChange={(page: number) => handlePageChange(page)}
      />
    </>
  )
};
