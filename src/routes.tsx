import { createBrowserRouter } from "react-router-dom";
import { Root, Home, Assessment, Trainings, ErrorPage } from './pages/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/assessment", 
        element: <Assessment />,
      },
      {
        path: "/trainings", 
        element: <Trainings />,
      },
    ]
  },
]);
export default router;