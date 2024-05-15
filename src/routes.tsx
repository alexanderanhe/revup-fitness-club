import { createBrowserRouter } from "react-router-dom";
import { Root, Home, LogIn, Assessment, Trainings, Trainings2, ErrorPage } from './pages/';

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
      {
        path: "/trainings2", 
        element: <Trainings2 />,
      },
    ]
  },
  {
    path: "/login", 
    element: <LogIn />,
  },
]);
export default router;