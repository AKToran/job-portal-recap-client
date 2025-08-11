import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";


const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path:'jobs/:id',
        loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
        element: <PrivateRoute> <JobDetails/> </PrivateRoute>
      },
      {
        path: 'jobApply/:id',
        element: <PrivateRoute> <JobApply/> </PrivateRoute>
      }
    ]
  },
  {
    path:'/app',
    Component: App
  }
])


export default router;