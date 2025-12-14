import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import AuthProvaider from "./Provaider/AuthProvaider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvaider>
  </StrictMode>
);
