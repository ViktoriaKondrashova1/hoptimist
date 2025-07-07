import type { BaseComponent } from "@/shared/types/common-types";
import type { FC } from "react";
import { Grid, Space } from "antd";
import { AppTitle } from "@/shared/components/ui/AppTitle/AppTitle";
import { APP_NAME } from "@/shared/constants/constants";
import "./HeroSection.scss";

interface Props extends BaseComponent {}

// const { useBreakpoint } = Grid;

export const HeroSection: FC<Props> = ({ testId = "hero-section" }) => {
  //   const screens = useBreakpoint()

  return (
    <div data-testid={testId} className="hero-section">
      <Space direction="vertical" size="large">
        <AppTitle>{APP_NAME}</AppTitle>;
      </Space>
    </div>
  );
};
