import type { BaseComponent } from '@/shared/types/common-types.ts'
import type { FC } from 'react'
import { Col, Row } from 'antd'
import { ProductCard } from '@/modules/products/components/ProductCard/ProductCard'
import { Product } from "@/modules/products/types/product-types";
import './ProductList.scss'

interface Props extends BaseComponent {
  products: Product[] | undefined
}

export const ProductList: FC<Props> = ({ testId = 'product-list', products }) => {
  return (
    <div className="product-list" data-testid={testId}>
      <Row
        gutter={[24, 24]}
        className="row"
      >
        {products?.map(product => (
          <Col
            key={product.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xxl={0}
            className="col five-cols"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}