import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { QueryProvider } from "./app/providers/QueryProvider";

import "@/style/index.css";
import { SelectionProvider } from "./context/SelectionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <SelectionProvider>
        <App />
      </SelectionProvider>
    </QueryProvider>
  </React.StrictMode>,
);
