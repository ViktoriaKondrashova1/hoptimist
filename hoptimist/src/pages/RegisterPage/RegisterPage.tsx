import { type FC, useState } from "react";
import {AppTitle} from "@/shared/components/ui/AppTitle/AppTitle"
import {AppButton } from "@/shared/components/ui/AppButton/AppButton"
import {AppText} from "@/shared/components/ui/AppText/AppText"
import { Link } from 'react-router-dom'
import {Steps, message, Flex, Grid, Form} from "antd"
import {steps} from "./constructor"

const { useBreakpoint } = Grid;

export const RegisterPage: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [form] = Form.useForm();

   const next = async () => {
    try {
      await form.validateFields();
      setCurrent(current + 1);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const prev = () => setCurrent(current - 1);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const screens = useBreakpoint();

  return (
    <Flex vertical gap="large" style={{width: "60%", margin: "auto"}}>
      <AppTitle level={2} style={{ textAlign: 'center', fontWeight: 300 }}>Register</AppTitle>
      <Steps current={current} items={items} size={!screens.lg ? "small" : "default"}/>
      <Form
        form={form}
        layout="vertical"
      >
        {steps[current].content}
      </Form>
      <div style={{ margin: "auto" }}>
        {current < steps.length - 1 && (
          <AppButton type="primary" onClick={() => next()}>
            Next
          </AppButton>
        )}
        {current === steps.length - 1 && (
          <AppButton type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </AppButton>
        )}
        {current > 0 && (
          <AppButton style={{ margin: '0 8px' }} onClick={() => prev()}>
            Back
          </AppButton>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <AppText>
          Already have an account?
          {' '}
          <Link to="/login">Login</Link>
        </AppText>
      </div>
    </Flex>
  )
};
