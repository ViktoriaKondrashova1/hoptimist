import {Empty} from "antd";
import type { BaseComponent } from '@/shared/types/common-types.ts'
import {type FC } from 'react'
import "./AppEmpty.scss"

interface Props extends BaseComponent {}

export const AppEmpty: FC<Props> = ({ testId = 'empty'}) => {
    return (
      <Empty 
        data-testid={testId} 
        className="empty"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <span className="empty-description">No beers</span>
        }   
      />
    )
}