import { createBrowserRouter } from "react-router-dom";
import Layout from "@app/layouts/main/Layout/Layout";
import QuestionsPage from "@pages/QuestionsPage/QuestionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "questions-page", element: <QuestionsPage /> }],
  },
]);
