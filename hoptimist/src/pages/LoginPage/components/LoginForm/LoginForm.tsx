import { type FC, useState } from "react";
import {Form} from "antd"
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {AppInput} from "@/shared/components/ui/AppInput/AppInput"
import { PasswordInput } from "../PasswordInput/PasswordInput";
import {AppButton} from "@/shared/components/ui/AppButton/AppButton"
import { emailValidationRules, passwordValidationRules } from './validation.ts'

export const LoginForm: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const handleLogin = () => {}

  return (
    <Form name="login" layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={emailValidationRules}
      >
        <AppInput prefix={<MailOutlined  />} placeholder="Email" />
      </Form.Item>
       <Form.Item
        name="password"
        label="Password"
        rules={passwordValidationRules}
      >
        <PasswordInput 
          prefix={<LockOutlined />} 
          placeholder="Password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
          />
      </Form.Item>
      <Form.Item>
        <AppButton
          block
          type="primary"
          htmlType="submit"
          style={{marginTop: 8}}
          onClick={handleLogin}
        >
          Log in
        </AppButton>
      </Form.Item>
    </Form>
  )
};