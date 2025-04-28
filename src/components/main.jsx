import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "./TodoList";
import AlertButton from "./AlertButton";
import Toolbar from "./Toolbar";
import SearchForm from "./SearchForm";
import HelloForm from "./HelloForm";
import Counter from "./Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <AlertButton text="Click me!" message="You click me" />
      <TodoList />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar button clicked!");
        }}
      />
      <HelloForm />
      <SearchForm />
      <Counter />
      <Counter />
    </Container>
  </StrictMode>
);
