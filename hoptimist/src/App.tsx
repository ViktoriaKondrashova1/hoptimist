import { RouterProvider } from "react-router-dom";
import { router } from "@/kernel/router/router-config";
import { App as AntApp, ConfigProvider } from "antd";
import { theme } from "@/kernel/config/theme";

function App() {
  return (
    <AntApp>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </AntApp>
  );
}

export default App;
