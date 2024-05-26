import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/routes";
import { AuthProvider } from "./context/authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
