import type { FC, ReactNode } from "react";
import type { BaseComponent } from "@/shared/types/common-types";
import { Tooltip } from "antd";
import { AppButton } from "@/shared/components/ui/AppButton/AppButton";

interface Props extends BaseComponent {
  tooltip: string,
  icon: ReactNode
}

export const ProductCardButton: FC<Props> = ({ testId = "product-card-button", tooltip, icon }) => {
  return (
    <Tooltip data-testid={testId} title={tooltip}>
      <AppButton
        shape="circle"
        variant="outlined"
        icon={icon}
      />
    </Tooltip>
  );
};
