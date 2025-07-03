import type { FC } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  items: MenuProps["items"];
}

export const AppHeaderMenu: FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (info: { key: string }): void => {
    navigate(info.key);
  };

  return (
    <Menu
      items={items}
      mode="horizontal"
      onClick={handleMenuClick}
      selectedKeys={[location.pathname]}
      disabledOverflow={true}
      style={{
        background: "inherit",
        borderBottom: "none",
      }}
    />
  );
};
