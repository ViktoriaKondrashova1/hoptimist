import { type FC, useState } from "react";
import {AppTitle} from "@/shared/components/ui/AppTitle/AppTitle"
import {AppButton } from "@/shared/components/ui/AppButton/AppButton"
import {Steps, message} from "antd"
import {steps} from "./constructor"

export const RegisterPage: FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => setCurrent(current + 1);

  const prev = () => setCurrent(current - 1);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <AppTitle level={2} style={{ textAlign: 'center', fontWeight: 300 }}>Register</AppTitle>
      <Steps current={current} items={items} style={{width: "60%", margin: "auto"}}/>
      <div>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
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
    </>
  )
};
