import type { FC } from "react";
import {BaseComponent} from "@/shared/types/common-types"
import {App as AntApp, Card, Space, Flex, Grid} from "antd"
import {AppTitle} from "@/shared/components/ui/AppTitle/AppTitle"
import {AppText} from "@/shared/components/ui/AppText/AppText"
import {AppButton} from "@/shared/components/ui/AppButton/AppButton"
import "./PromocodeSection.scss"

interface Props extends BaseComponent {
  promocode: string
  promocodeText: string
}

const { useBreakpoint } = Grid

export const PromocodeSection: FC<Props> = ({testId = 'promocode', promocode, promocodeText}) => {
  const { message } = AntApp.useApp()
  const screens = useBreakpoint()

  const copyPromocode = (): void => {
    navigator.clipboard.writeText(promocode).then(() => {
      message.success('Promocode has been copied')
    }).catch((err) => {
      console.error('Failed to copy:', err)
    })
  }

  return (
    <Card
      data-testid={testId}
      className="promocode"
    >
      <Space direction="vertical" size="small">
        <AppTitle level={4}>{promocodeText}</AppTitle>
        <Flex vertical={!screens.md} gap="small" justify="center">
          <AppText className="code" strong>{promocode}</AppText>
          <AppButton type="primary"  onClick={copyPromocode}>Copy Code</AppButton>
        </Flex>
      </Space>
    </Card>
  );
};