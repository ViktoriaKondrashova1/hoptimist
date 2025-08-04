import {type FC} from "react" 
import {Flex, Form, Switch} from "antd"
import {AppText} from "@/shared/components/ui/AppText/AppText"
import {Address} from "../Address/Address"

export const BillingAddress: FC = () => {
  return (
      <>
        <Form.Item>
          <Flex gap="small" justify="center">
              <Switch defaultChecked />
              <AppText>Use shipping address for billing</AppText>
          </Flex>
        </Form.Item>
        <Address />
      </>
  ) 
}