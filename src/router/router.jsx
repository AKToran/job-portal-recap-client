import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
  {
    path:'/app',
    Component: App
  }
])


export default router;