import { createRoot } from "react-dom/client";
import "@/shared/styles/fonts.css";
import "antd/dist/reset.css";
import "@/shared/styles/index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
