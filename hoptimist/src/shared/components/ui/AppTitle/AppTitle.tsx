import type { FC } from "react";
import { Typography } from "antd";
import type { BaseComponent } from "@/shared/types/common-types";

const { Title } = Typography;

type TitleProps = React.ComponentProps<typeof Title>;

interface Props extends TitleProps, BaseComponent {}

export const AppTitle: FC<Props> = ({
  children,
  testId = "title",
  ...rest
}) => {
  return (
    <Title data-testid={testId} {...rest}>
      {children}
    </Title>
  );
};
