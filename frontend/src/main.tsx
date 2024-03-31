import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackground.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GridBackground>
        <App />
      </GridBackground>
    </BrowserRouter>
  </React.StrictMode>
);
