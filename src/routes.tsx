import { createBrowserRouter } from "react-router-dom";
import { Root, Home, LogIn, Profile, Assessment, OnDemand, Workout, ErrorPage, Calendar } from './pages/';

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
        path: "/calendar", 
        element: <Calendar />,
      },
      {
        path: "/on-demand", 
        element: <OnDemand />,
      },
      {
        path: "/profile", 
        element: <Profile />,
      },
      {
        path: "/workout", 
        element: <Workout />,
      },
    ]
  },
  {
    path: "/login", 
    element: <LogIn />,
  },
]);
export default router;