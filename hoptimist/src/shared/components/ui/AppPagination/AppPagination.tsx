import {Pagination} from "antd";
import type { BaseComponent } from '@/shared/types/common-types.ts'
import type { FC } from 'react'

interface Props extends BaseComponent {
    current: number | undefined
    total: number | undefined
    pageSize: number | undefined
    onChange: (page: number) => void
}

export const AppPagination: FC<Props> = ({ testId = 'pagination', current, total, pageSize, onChange}) => {
    return (
        <Pagination 
            data-testid={testId} 
            current={current} 
            total={total} 
            pageSize={pageSize} 
            onChange={onChange} 
            hideOnSinglePage 
            showSizeChanger={false}
        />
    )
}