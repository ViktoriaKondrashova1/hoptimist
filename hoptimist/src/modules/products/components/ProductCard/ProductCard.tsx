import type { FC } from "react";
import type { Product } from "@/modules/products/types/product-types";
import type { BaseComponent } from "@/shared/types/common-types";
import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import { AppTitle } from "../../../../shared/components/ui/AppTitle/AppTitle";
import { ProductCardButton } from "@/modules/products/components/ProductCardButton/ProductCardButton";
import { PlusOutlined, HeartOutlined } from "@ant-design/icons";
import "./ProductCard.scss";

interface Props extends BaseComponent {
  product: Product;
}

export const ProductCard: FC<Props> = ({
  testId = "product-card",
  product,
}) => {
  return (
    <Card
      data-testid={testId}
      hoverable
      className="product-card"
      cover={
        product.images && <img alt={product.title} src={product.images[0]} />
      }
    >
      <Meta
        title={
          <AppTitle level={4} className="product-title">
            {product.title}
          </AppTitle>
        }
        description={
          <div className="product-description">
            <div className="brewery">{product.brewery.name}</div>
            <div className="category">{product.categories[0].name}</div>
            <Flex
              justify="space-between"
              align="center"
              className="price-section"
            >
              <div className="price">
                {product.isDiscount ? (
                  <Flex gap="6px">
                    <span className="original-price">
                      {`$${product.price}`}
                    </span>
                    <span className="discount-price">
                      {`$${product.discount}`}
                    </span>
                  </Flex>
                ) : (
                  `$${product.price}`
                )}
              </div>
              <Flex gap="small">
                <ProductCardButton
                  tooltip="Add to favorites"
                  icon={<HeartOutlined />}
                />
                <ProductCardButton
                  tooltip="Add to cart"
                  icon={<PlusOutlined />}
                />
              </Flex>
            </Flex>
          </div>
        }
      />
    </Card>
  );
};
