import MainLayout from "../components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:<LandingPage />
      },
      
    ],
  },
]);

export default router;