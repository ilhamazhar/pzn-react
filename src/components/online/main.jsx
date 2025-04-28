import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Online from "./Online.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Online />
  </StrictMode>
);
