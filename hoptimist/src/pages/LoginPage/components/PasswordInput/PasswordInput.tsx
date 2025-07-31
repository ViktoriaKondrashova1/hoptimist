import type { InputProps } from "antd";
import type { FC } from "react";
import { Input } from "antd";
import type { BaseComponent } from "@/shared/types/common-types";

interface PasswordProps {
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
}

interface Props extends InputProps, BaseComponent {
    visibilityToggle?: boolean | PasswordProps
}

export const PasswordInput: FC<Props> = ({
  testId = "password-input",
  visibilityToggle,
  ...rest
}) => {
  return (
       <Input.Password
          data-testid={testId}
          visibilityToggle={visibilityToggle}
          {...rest}
        />
  );
};