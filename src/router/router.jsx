import { createBrowserRouter } from "react-router"
import App from "../App";
import { Children } from "react";
import Homelayout from "../layout/Homelayout";
import Hearder from "../components/header/Hearder";
import Home from "../components/header/home/Home";
import Dashboard from "../components/profile/Dashboard";
import Login from "../components/acess setup/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path : "home",
                element: <Home></Home>
            },
            {
                path:"myprofile",
                element: <Dashboard></Dashboard>
            },
            {
                path:"login",
                element: <Login ></Login>
            }
        ]
    }
]);

export default router;