import type { FC } from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProductLineup } from "@/shared/components/ui/ProductLineup/ProductLineup";
import {getFeaturedProducts} from "@/modules/products/api/products-api"
import { Product } from "@/modules/products/types/product-types";
import {useRequest} from "@/shared/hooks/use-request"
import {PromocodeSection} from "@/pages/MainPage/components/PromocodeSection/PromocodeSection"
import {APP_NAME, PROMOCODE_TEXT} from "@/shared/constants/constants"

export const MainPage: FC = () => {
  const {data: popularProducts} = useRequest<Product[]>(getFeaturedProducts)

  return (
    <>
      <HeroSection />
      <ProductLineup title="POPULAR BEERS" products={popularProducts} />
      <PromocodeSection promocode={APP_NAME} promocodeText={PROMOCODE_TEXT}/>
    </>
  );
};
