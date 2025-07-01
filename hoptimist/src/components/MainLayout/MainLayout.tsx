import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";

export const MainLayout: FC = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AppHeader></AppHeader>
      <Outlet />
      <AppFooter></AppFooter>
    </div>
  );
};
