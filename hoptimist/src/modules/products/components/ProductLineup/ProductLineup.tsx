import type { FC } from "react";
import type { BaseComponent } from "@/shared/types/common-types";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Flex, Grid, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../../../../shared/components/ui/AppButton/AppButton";
import { AppTitle } from "../../../../shared/components/ui/AppTitle/AppTitle";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { Product } from "@/modules/products/types/product-types";
import { ProductCard } from "@/modules/products/components/ProductCard/ProductCard";

interface Props extends BaseComponent {
  title: string;
  products: Product[] | null;
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
    <Flex vertical gap="large" data-testid={testId} style={{ marginTop: 60 }}>
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
          GO TO CATALOG
        </AppButton>
      </Flex>
      <Row gutter={[16, 16]} justify="center">
        {products?.map((card) => (
          <Col
            key={card.id}
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProductCard product={card} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};
