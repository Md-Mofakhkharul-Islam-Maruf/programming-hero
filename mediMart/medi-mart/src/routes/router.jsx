import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home";
import CategoriesSection from "../components/categoryCard/CategoriesSection";
import CategoryDetails from "../components/categoryCard/CategoryDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/errorPage/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Rootlayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/category',
                Component: CategoriesSection
            },
            {
                path: '/category/:categoryName',
                Component: CategoryDetails
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/*',
                Component: Error
            },
        ]
    },
]);
