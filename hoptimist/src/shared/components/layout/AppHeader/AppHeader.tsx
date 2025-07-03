import type { FC } from "react";
import { Layout, Flex } from "antd";
import type { MenuProps } from "antd";
import { AppHeaderTitle } from "@/shared/components/layout/AppHeader/AppHeaderTitle";
import { AppHeaderMenu } from "@/shared/components/layout/AppHeader/AppHeaderMenu";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { LanguageSwitcher } from "./LanguageSwitcher";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: APP_PATHS.CATALOG_PATH,
    label: "CATALOG",
  },
  {
    key: APP_PATHS.BLOG_PATH,
    label: "BLOG",
  },
  {
    key: APP_PATHS.LOGIN_PATH,
    label: "LOG IN",
  },
  {
    key: APP_PATHS.REGISTER_PATH,
    label: "SIGN UP",
  },
  {
    key: APP_PATHS.CART_PATH,
    icon: (
      <ShoppingCartOutlined
        style={{
          fontSize: "18px",
        }}
      />
    ),
  },
];

export const AppHeader: FC = () => {
  return (
    <Header
      style={{ background: "inherit", position: "sticky", top: 0, zIndex: 1 }}
    >
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        <AppHeaderTitle />
        <Flex align="center" style={{ height: "100%" }}>
          <AppHeaderMenu items={items} />
          <LanguageSwitcher />
        </Flex>
      </Flex>
    </Header>
  );
};
