import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { QueryProvider } from "./app/providers/QueryProvider";
import { SelectionProvider } from "./features/observation-panel/model/SelectionContext";

import "@/app/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <SelectionProvider>
        <App />
      </SelectionProvider>
    </QueryProvider>
  </React.StrictMode>,
);
