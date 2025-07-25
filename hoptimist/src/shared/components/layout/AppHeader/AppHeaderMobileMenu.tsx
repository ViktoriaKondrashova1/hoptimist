import { useState, type FC } from "react";
import { Drawer } from "antd";
import {MenuOutlined} from "@ant-design/icons"
import type { MenuProps } from "antd";
import type { BaseComponent } from "@/shared/types/common-types";
import { AppButton } from "../../ui/AppButton/AppButton";
import {AppHeaderMenu} from "./AppHeaderMenu"
import "./AppHeaderMobileMenu.scss"

interface Props extends MenuProps, BaseComponent {
  items: MenuProps["items"];
}

export const AppHeaderMobileMenu: FC<Props> = ({ items }) => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
     <AppButton type="text" icon={<MenuOutlined />} onClick={showDrawer} style={{marginRight: "10px"}}/>
      <Drawer
        title="Menu"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        className="header-drawer"
    >
        <AppHeaderMenu items={items}/>
      </Drawer> 
    </>
  );
};
