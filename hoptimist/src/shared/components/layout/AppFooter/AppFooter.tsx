import type { BaseComponent } from "@/shared/types/common-types";
import type { ItemType } from "antd/es/menu/interface";
import type { FC } from "react";
import { theme } from "@/kernel/config/theme";
import { Flex, Grid, Layout, List, Typography } from "antd";
import { AppHeaderTitle } from "../AppHeader/AppHeaderTitle";
import { AppHeaderMenu } from "../AppHeader/AppHeaderMenu";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { AppTitle } from "@/shared/components/ui/AppTitle/AppTitle";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./AppFooter.scss";

interface Props extends BaseComponent {}

const { Footer } = Layout;
const { Link } = Typography;
const { useBreakpoint } = Grid;

export const AppFooter: FC<Props> = ({ testId = "footer", ...rest }) => {
  const screens = useBreakpoint();

  const menuItems: ItemType[] = [
    { key: APP_PATHS.CATALOG_PATH, label: "CATALOG" },
    { key: APP_PATHS.BLOG_PATH, label: "BLOG" },
    { key: APP_PATHS.CART_PATH, label: "CART" },
  ];

  const media = [
    {
      icon: <LinkedinOutlined />,
      link: "https://www.linkedin.com/in/victoria-kondrashova-7804781a0/",
    },
    {
      icon: <GithubOutlined />,
      link: "https://github.com/ViktoriaKondrashova1",
    },
    { icon: <InstagramOutlined />, link: "https://www.instagram.com/kavidmi/" },
    { icon: <MailOutlined />, link: "mailto:kavidmi@gmail.com" },
  ];

  return (
    <Footer
      data-testid={testId}
      {...rest}
      className="footer"
      style={{ background: theme.token.colorPrimary }}
    >
      <Flex justify="space-between">
        <Flex justify="space-between" gap="100px">
          {screens.md && <AppHeaderTitle />}
          <AppHeaderMenu items={menuItems} />
        </Flex>
        <List
          header={
            <AppTitle level={4} style={{ fontWeight: 200 }}>
              Socials
            </AppTitle>
          }
          grid={{ gutter: 24 }}
          dataSource={media}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Link href={item.link} target="_blank">
                {item.icon}
              </Link>
            </List.Item>
          )}
        />
      </Flex>
    </Footer>
  );
};
