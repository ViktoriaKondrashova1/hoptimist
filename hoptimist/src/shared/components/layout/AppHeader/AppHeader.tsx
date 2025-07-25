import type { FC } from "react";
import { Layout, Flex, Badge, Popover, Grid } from "antd";
import type { MenuProps } from "antd";
import { AppHeaderTitle } from "@/shared/components/layout/AppHeader/AppHeaderTitle";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AppButton } from "@/shared/components/ui/AppButton/AppButton";
import { AppHeaderMenu } from "./AppHeaderMenu";
import {AppHeaderMobileMenu} from "./AppHeaderMobileMenu"
import type { BaseComponent } from "@/shared/types/common-types";
import { theme } from '@/kernel/config/theme'

interface Props extends BaseComponent {}

const { Header } = Layout;

const { useBreakpoint } = Grid

const userName = "Victoria"; // временное значение

const isAuth = false; // временное значение

const items: MenuProps["items"] = [
  {
    key: APP_PATHS.CATALOG_PATH,
    label: "CATALOG",
  },
  {
    key: APP_PATHS.BLOG_PATH,
    label: "BLOG",
  },
  ...(!isAuth
    ? [
        {
          key: APP_PATHS.LOGIN_PATH,
          label: "LOG IN",
        },
        {
          key: APP_PATHS.REGISTER_PATH,
          label: "SIGN UP",
        },
      ]
    : []),
  {
    key: APP_PATHS.CART_PATH,
    icon: (
      <Badge
        showZero
        size="small"
        count={0}
        style={{
          backgroundColor: theme.token.colorPrimary,
          alignItems: "center",
          fontSize: "10px",
        }}
      >
        <ShoppingCartOutlined />
      </Badge>
    ),
  },
];

const userMenuItems: MenuProps["items"] = [
  {
    key: APP_PATHS.PROFILE_PATH,
    label: "My Profile"
  },
  {
    key: APP_PATHS.FAVORITES_PATH,
    label: "Favorites"
  },
  {
    key: APP_PATHS.BASE_PATH,
    label: "Log Out"
  },
];

export const AppHeader: FC<Props> = ({ testId = "header" }) => {
    const screens = useBreakpoint()

  return (
    <Header
      data-testid={testId}
      style={{ background: "inherit", position: "sticky", top: 0, zIndex: 1 }}
    >
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        <AppHeaderTitle />
        <Flex align="center" style={{ height: "100%" }}>
          {screens.md ? <AppHeaderMenu items={items} mode="horizontal" /> : <AppHeaderMobileMenu items={items}/>}
          {isAuth && (
            <Popover
              content={<AppHeaderMenu items={userMenuItems} />}
              title={`Hello, ${userName}!`}
            >
              <AppButton
                type="text"
                style={{ marginRight: "10px" }}
                icon={<UserOutlined />}
              />
            </Popover>
          )}
          <LanguageSwitcher />
        </Flex>
      </Flex>
    </Header>
  );
};
