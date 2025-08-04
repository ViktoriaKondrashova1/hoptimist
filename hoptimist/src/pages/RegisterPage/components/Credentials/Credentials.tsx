import type { FC } from "react";
import {Card, Form} from "antd"
import {AppInput} from "@/shared/components/ui/AppInput/AppInput"
import {passwordValidationRules, emailValidationRules} from "@/pages/LoginPage/components/LoginForm/validation"
import type { BaseComponent } from "@/shared/types/common-types";

interface Props extends BaseComponent {}

export const Credentials: FC<Props> = ({testId = "credentials"}) => {
  return (
    <Card data-testid={testId} style={{ maxWidth: 400, margin: "auto" }}>
        <Form.Item name="email" label="Email" rules={emailValidationRules}>
          <AppInput placeholder="Email"/>
        </Form.Item>
        <Form.Item name="password" label="Password" rules={passwordValidationRules}>
          <AppInput placeholder="Password" />
        </Form.Item>
        <Form.Item name="confirm-password" label="Confirm Password" rules={passwordValidationRules}>
          <AppInput placeholder="Password" />
        </Form.Item>
    </Card>
  )
};