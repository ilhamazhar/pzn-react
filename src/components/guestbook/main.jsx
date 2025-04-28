import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import GuestBook from "./GuestBook";
import GuestBookForm from "./GuestBookForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuestBook />
  </StrictMode>
);
