import { createBrowserRouter } from "react-router"
import App from "../App";
import { Children } from "react";
import Homelayout from "../layout/Homelayout";
import Dashboard from "../components/profile/Dashboard";
import Login from "../components/acess setup/login";
import Home from "../components/Home/Home";
import Header from "../components/header/Header";
import Logout from "../components/acess setup/Logout";
import Register from "../components/acess setup/Register";

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
            },
            {
                path:"logout",
                element: <Logout ></Logout>
            },
            {
                path:"register",
                element: <Register ></Register>
            }
        ]
    }
]);

export default router;