import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/main.css";
import "./index.css";

import { FilterProvider } from "./providers/FilterProvider";
import { UserProvider } from "./providers/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <UserProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </UserProvider>
  </StrictMode>,
);
