import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <h1>About</h1>
        <Link to="/">Go back to home</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <h1>LOGIN_PAGE</h1>
        <Link to="/about">About</Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
