import type { FC } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

type TitleProps = React.ComponentProps<typeof Title>

interface Props extends TitleProps {}

export const AppTitle: FC<Props> = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>
}