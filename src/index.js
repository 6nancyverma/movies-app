import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { GlobalContextProvider } from "./context/globalContext.js";
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <GlobalContextProvider>
      {" "}
      <App />
    </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
