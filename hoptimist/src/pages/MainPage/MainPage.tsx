import type { FC } from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProductLineup } from "@/modules/products/components/ProductLineup/ProductLineup";
import {getFeaturedProducts} from "@/modules/products/api/getFeaturedProducts"
import { Product } from "@/modules/products/types/product-types";
import {useRequest} from "@/shared/hooks/useRequest"
import {PromocodeSection} from "@/pages/MainPage/components/PromocodeSection/PromocodeSection"
import {APP_NAME, PROMOCODE_TEXT} from "@/shared/constants/constants"
import {MainPageGrid} from "./components/GridSection/GridSection" 
import {MainPageCarousel} from "./components/MainPageCarousel/MainPageCarousel"

export const MainPage: FC = () => {
  const {data: popularProducts} = useRequest<Product[]>(getFeaturedProducts)

  return (
    <>
      <HeroSection />
      <ProductLineup title="POPULAR BEERS" products={popularProducts} />
      <PromocodeSection promocode={APP_NAME} promocodeText={PROMOCODE_TEXT}/>
      <MainPageGrid />
      <MainPageCarousel />
    </>
  );
};
