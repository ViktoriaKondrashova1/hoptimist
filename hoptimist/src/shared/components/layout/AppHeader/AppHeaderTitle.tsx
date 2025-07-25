import React from "react";
import {Grid} from "antd"
import { useNavigate } from "react-router-dom";
import { APP_NAME } from "@/shared/constants/constants";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { AppTitle } from "@/shared/components/ui/AppTitle/AppTitle";

const { useBreakpoint } = Grid

export const AppHeaderTitle = React.memo(() => {
  const navigate = useNavigate();
  const screens = useBreakpoint()

  return (
    <AppTitle
      style={{ margin: 0, cursor: "pointer", fontSize: screens.sm ? "38px" : "26px" }}
      onClick={() => navigate(APP_PATHS.BASE_PATH)}
    >
      {APP_NAME}
    </AppTitle>
  );
});
