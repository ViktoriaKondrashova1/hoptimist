import type { FC } from "react";
import { Radio } from "antd";
import { useState } from "react";
import type { BaseComponent } from "@/shared/types/common-types";

interface Props extends BaseComponent {}

export const LanguageSwitcher: FC<Props> = ({
  testId = "language-switcher",
}) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <Radio.Group
      data-testid={testId}
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      size="small"
      style={{
        background: "rgba(0, 0, 0, 0.04)",
        borderRadius: "4px",
        padding: "4px",
      }}
    >
      <Radio.Button
        value="en"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        EN
      </Radio.Button>
      <Radio.Button
        value="ru"
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        RU
      </Radio.Button>
    </Radio.Group>
  );
};
