import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecoverPassword from "./components/auth/recoverpassword.jsx";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Register from "./components/auth/register.jsx";
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from "./components/dashboard.jsx";
import Login from "./components/auth/login.jsx";
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/recoverpassword',
    element: <RecoverPassword />
  },
  {
    path: '/home',
    element: <Dashboard />
  }
])
const storedTheme = localStorage.getItem("theme");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={storedTheme || "light"}>
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode >
);

export default router
