import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const MainLayout: FC = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
