import type { ThemeConfig } from "antd";

export const theme = {
  token: {
    colorPrimary: "#d35917",
  },
  components: {
    Notification: {
      colorError: "#ff4d4f",
      fontSize: 16,
    },
    Button: {
      colorPrimaryTextHover: "#fff",
    },
  },
} satisfies ThemeConfig;
