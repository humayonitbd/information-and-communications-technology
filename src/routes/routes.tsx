import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import App from "../App";
import OurServiceDetails from "../pages/OurService/OurServiceDetails";
import CommonNavLink from "../pages/CommonNavLink/CommonNavLink";


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
      {
       path:'/page/:id',
        element:<CommonNavLink />
      },
      
    ],
  },
]);

export default router;