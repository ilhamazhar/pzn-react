import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "./../Container";
import ContactForm from "./ContactForm";
import Task from "./Task";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <ContactForm />
      <Task />
    </Container>
  </StrictMode>
);
