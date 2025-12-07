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
import PrivatRoute from "../Provider/PrivatRoute";
import SingelCartDetails from "../components/Home/SingelCartDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/Data.json'),
            },
            {
                path: "home",
                element: <Home></Home>,
                loader: () => fetch('/Data.json'),
            },
            {
                path: "dashboard",
                element: (
                    <PrivatRoute>
                        <Dashboard />
                    </PrivatRoute>
                )
            },
            {
                path: "login",
                element: <Login ></Login>
            },
            {
                path: "logout",
                element: <Logout ></Logout>
            },
            {
                path: "register",
                element: <Register ></Register>
            },
            {
                path: "/skill-details/:id",
                element:
                    <PrivatRoute>
                        <SingelCartDetails></SingelCartDetails>
                    </PrivatRoute>
                ,
                loader: () => fetch('/Data.json'),

            },
            {

            }
        ]
    }
]);

export default router;