import type { FC } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import type { BaseComponent } from "@/shared/types/common-types";

interface Props extends MenuProps, BaseComponent {
  items: MenuProps["items"];
}

export const AppHeaderMenu: FC<Props> = ({
  items,
  testId = "header-menu",
  ...rest
}) => {
  const navigate = useNavigate();

  const handleMenuClick = (info: { key: string }): void => {
    navigate(info.key);
  };

  return (
    <Menu
      data-testid={testId}
      items={items}
      onClick={handleMenuClick}
      selectedKeys={[]}
      disabledOverflow={true}
      style={{
        background: "inherit",
        borderBottom: "none",
        borderRight: "none"
      }}
      {...rest}
    />
  );
};
