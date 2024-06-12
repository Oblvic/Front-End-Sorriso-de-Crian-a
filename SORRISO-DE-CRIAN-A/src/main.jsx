import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { GlobalStyled } from "./MainStyled.jsx";
import WorkShop from "./components/pages/workshop/WorkShop.jsx";
import ErrorPage from "./components/pages/errorpage/ErrorPage.jsx";
import Date from "./components/pages/date/Date.jsx";
import Donations from "./components/pages/donations/Donations.jsx";
import Login from "./components/pages/auth/Login.jsx";
import Register from "./components/pages/auth/Register.jsx";
import UserPage from "./components/user/UserPage.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/workshop",
        element: <WorkShop />,
      },
      {
        path: "/datas",
        element: <Date />,
      },
      {
        path: "/doacoes",
        element: <Donations />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Register />,
      },
      {
        path: "/usuariopage",
        element: <UserPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
