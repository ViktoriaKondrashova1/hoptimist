import { Radio } from "antd";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <Radio.Group
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
