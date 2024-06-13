// Importações do codigo
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

// Componente de layout que define a estrutura comum da página
const Layout = () => {
  return (
    <>
      <NavBar /> {/* Renderiza a barra de navegação */}
      <Outlet /> {/* Renderiza o conteúdo da rota atual */}
      <Footer /> {/* Renderiza o rodapé */}
    </>
  );
};

// Configuração das rotas usando o react-router-dom
const router = createBrowserRouter([
  {
    element: <Layout />, // Componente raiz que contém o layout comum
    errorElement: <ErrorPage />, // Componente a ser renderizado em caso de erro
    children: [
      {
        path: "/", // Rota para a página inicial
        element: <HomePage />, // Componente da página inicial
      },
      {
        path: "/workshop", // Rota para a página de workshops
        element: <WorkShop />, // Componente da página de workshops
      },
      {
        path: "/datas", // Rota para a página de datas
        element: <Date />, // Componente da página de datas
      },
      {
        path: "/doacoes", // Rota para a página de doações
        element: <Donations />, // Componente da página de doações
      },
      {
        path: "/login", // Rota para a página de login
        element: <Login />, // Componente da página de login
      },
      {
        path: "/cadastro", // Rota para a página de registro
        element: <Register />, // Componente da página de registro
      },
      {
        path: "/usuariopage", // Rota para a página do usuário
        element: <UserPage />, // Componente da página do usuário
      },
    ],
  },
]);

// Renderiza o aplicativo no DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled /> {/* Aplica estilos globais */}
    <RouterProvider router={router} />{" "}
    {/* Fornece o contexto do roteador para a aplicação */}
  </React.StrictMode>,
);
