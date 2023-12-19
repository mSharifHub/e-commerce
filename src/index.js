import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/main.css";
import "./index.css";
import { ThemeProvider } from "./providers/themeProvider";
import { CartProvider } from "./providers/CartProvider";
import { FilterProvider } from "./providers/FilterProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
