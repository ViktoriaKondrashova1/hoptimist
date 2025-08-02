import type { FC } from "react";
import {Card, Form} from "antd"
import {AppInput} from "@/shared/components/ui/AppInput/AppInput"
import {firstNameValidationRules, lastNameValidationRules} from "../../validation"
import type { BaseComponent } from "@/shared/types/common-types";

interface Props extends BaseComponent {}

export const PersonalInfo: FC<Props> = ({testId = "personal-info"}) => {
  return (
    <Card data-testid={testId} style={{ maxWidth: 400, margin: "auto" }}>
        <Form.Item name="first-name" label="First Name" rules={firstNameValidationRules}>
          <AppInput placeholder="First Name"/>
        </Form.Item>
        <Form.Item name="last-name" label="Last Name" rules={lastNameValidationRules}>
          <AppInput placeholder="Last Name" />
        </Form.Item>
    </Card>
  )
};