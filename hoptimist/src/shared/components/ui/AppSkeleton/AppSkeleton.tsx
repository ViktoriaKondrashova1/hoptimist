import {Skeleton, Card} from "antd";
import type { BaseComponent } from '@/shared/types/common-types.ts'
import {type FC } from 'react'

interface Props extends BaseComponent {}

export const AppSkeleton: FC<Props> = ({ testId = 'skeleton'}) => {
    return (
      <Card data-testid={testId} style={{ padding: '16px 0', width: '100%', background: "transparent" }}>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </Card>
    )
}