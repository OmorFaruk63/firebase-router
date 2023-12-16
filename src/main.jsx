import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routers/routes";
import FirebaseProvaider from "./context/Firebase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvaider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </FirebaseProvaider>
  </React.StrictMode>
);
