import type { FC } from "react";
import type { BaseComponent } from "@/shared/types/common-types";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Flex, Grid } from "antd";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../AppButton/AppButton";
import { AppTitle } from "../AppTitle/AppTitle";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { Product } from "@/modules/products/types/product-types";
import {ProductCard} from "@/shared/components/ui/ProductCard/ProductCard"

interface Props extends BaseComponent {
  title: string;
  products: Product[];
}

const { useBreakpoint } = Grid;

export const ProductLineup: FC<Props> = ({
  testId = "product-lineup",
  title,
  products,
}) => {
  const navigate = useNavigate();
  const screens = useBreakpoint();

  return (
    <Flex vertical gap="large" data-testid={testId} style={{marginTop: 60}}>
      <Flex
        vertical={screens.xs}
        justify={screens.xs ? "flex-start" : "space-between"}
      >
        <AppTitle level={3}>{title}</AppTitle>

        <AppButton
          type="text"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
          onClick={() => navigate(APP_PATHS.CATALOG_PATH)}
        >
          Go To Catalog
        </AppButton>
      </Flex>
      <Flex wrap="wrap" justify="space-around" gap="small">
        {products.map((card) => (
          <ProductCard key={card.id} product={card} />
        ))}
      </Flex>
    </Flex>
  );
};
