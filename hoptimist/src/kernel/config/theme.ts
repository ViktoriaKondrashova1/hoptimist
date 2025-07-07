import type { ThemeConfig } from "antd";

export const theme = {
  token: {
    colorPrimary: "#d35917",
    fontFamily: "Barlow, sans-serif",
  },
  components: {
    Notification: {
      colorError: "#ff4d4f",
      fontSize: 16,
    },
    Menu: {
      itemHoverColor: "#d35917",
      activeBarHeight: 0,
      fontSize: 16,
    },
    Button: {
      colorPrimaryTextHover: "#fff",
      colorPrimary: "#001529",
    },
    Typography: {
      fontWeightStrong: 200,
    },
  },
} satisfies ThemeConfig;
