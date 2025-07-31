import type { InputProps } from "antd";
import type { FC } from "react";
import { Input } from "antd";
import type { BaseComponent } from "@/shared/types/common-types";

interface Props extends InputProps, BaseComponent {}

export const AppInput: FC<Props> = ({testId = "input", ...rest}) => {
  return (
    <Input data-testid={testId} {...rest}/>
  );
};