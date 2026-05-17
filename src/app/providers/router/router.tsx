import { createBrowserRouter } from "react-router-dom";

import Layout from "@app/layouts/main/Layout/Layout";
import { QuestionsPage, LoginPage, RegisterPage } from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "questions-page", element: <QuestionsPage /> },
      { path: "login-page", element: <LoginPage /> },
      { path: "register-page", element: <RegisterPage /> },
    ],
  },
]);
