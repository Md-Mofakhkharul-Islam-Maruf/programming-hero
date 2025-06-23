import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../pages/layouts/RootLayout";
import { Children, Component } from "react";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
]);

export default router;