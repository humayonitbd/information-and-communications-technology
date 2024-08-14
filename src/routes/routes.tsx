import MainLayout from "../components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import App from "../App";
import OurServiceDetails from "../pages/OurService/OurServiceDetails";

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
      {
       path:'/:id',
        element:<OurServiceDetails />
      },
      
    ],
  },
]);

export default router;