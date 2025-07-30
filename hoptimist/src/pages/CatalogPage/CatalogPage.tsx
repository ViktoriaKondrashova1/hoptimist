import { type FC, useCallback, useEffect } from 'react';
import {Flex} from "antd"
import {getCatalogProducts} from "@/modules/products/api/getCatalogProducts"
import {useRequest} from "@/shared/hooks/useRequest"
import {ProductList} from "./components/ProductList/ProductList"
import {AllProductsPesponse} from "@/modules/products/types/product-types"
import {AppPagination} from "@/shared/components/ui/AppPagination/AppPagination"
import {useCatalogPage} from "./hooks/useCatalogPage"
import { AppSkeleton } from '@/shared/components/ui/AppSkeleton/AppSkeleton';

export const CatalogPage: FC = () => {
  const { currentPage, handlePageChange } = useCatalogPage()
  const fetchCatalogProducts = useCallback(() => getCatalogProducts(currentPage), [currentPage])
  const {data: productsResponse, isLoading} = useRequest<AllProductsPesponse>(fetchCatalogProducts)
  const allProducts = productsResponse?.data
  const catalogPagination = productsResponse?.pagination

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])
    
  return (
    <>
      {isLoading ? (
        <AppSkeleton />
      ) : (
        <Flex vertical gap="middle">
          <ProductList products={allProducts} />
          <AppPagination 
            current={catalogPagination?.page || currentPage} 
            total={catalogPagination?.total} 
            pageSize={catalogPagination?.limit} 
            onChange={handlePageChange}
          />
        </Flex>
      )}
    </>
  )
};
