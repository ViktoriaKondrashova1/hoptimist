import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_NAME } from "@/shared/constants/constants";
import { APP_PATHS } from "@/kernel/router/route-paths";
import { AppTitle } from "@/shared/components/ui/AppTitle/AppTitle";

export const AppHeaderTitle = React.memo(() => {
  const navigate = useNavigate();

  return (
    <AppTitle
      style={{ margin: 0, cursor: "pointer"}}
      onClick={() => navigate(APP_PATHS.BASE_PATH)}
    >
      {APP_NAME}
    </AppTitle>
  );
});
