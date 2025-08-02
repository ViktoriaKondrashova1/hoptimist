import type { FC } from "react";
import {Card, Flex, Form, Checkbox, Select} from "antd"
import {AppInput} from "@/shared/components/ui/AppInput/AppInput"
import type { BaseComponent } from "@/shared/types/common-types";
import {countries} from "../../countries"
import {countryValidationRules, cityValidationRules, streetValidationRules, postalValidationRules} from "../../validation"

interface Props extends BaseComponent {}

export const Address: FC<Props> = ({testId = "address"}) => {
  return (
    <Card data-testid={testId} style={{ maxWidth: 400, margin: "auto" }}>
      <Form name="credentials" layout="vertical">
        <Flex gap="middle">
          <Form.Item name="country" label="Country" style={{ flex: 1 }} rules={countryValidationRules}>
            <Select
                placeholder="United States"
                options={countries}
                showSearch
              >
                {countries.map(country => (
                  <Select.Option key={country.value} value={country.value}>
                    {country.label}
                  </Select.Option>
                ))}
              </Select>
          </Form.Item >
          <Form.Item name="city" label="City" style={{ flex: 1 }} rules={cityValidationRules}>
            <AppInput placeholder="Brooklyn"/>
          </Form.Item>
        </Flex>
        <Flex gap="middle">
          <Form.Item name="street" label="Street" rules={streetValidationRules}>
            <AppInput placeholder="456 Atlantic Avenue, Unit 2A"/>
          </Form.Item>
          <Form.Item name="postcode" label="Postcode" rules={postalValidationRules}>
            <AppInput placeholder="11217"/>
          </Form.Item>
        </Flex>
      </Form>
      <Checkbox>Mark as primary</Checkbox>
    </Card>
  )
};