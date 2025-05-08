import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./assets/redux/counterSlice.js";
import "./index.css";
import App from "./App.jsx";
import Counter from "./components/Counter.jsx";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />} />
          <Route
            path="counter"
            element={
              <>
                <Counter />
                <Counter />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
