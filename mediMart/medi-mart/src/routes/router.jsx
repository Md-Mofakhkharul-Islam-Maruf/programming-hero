import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home";
import CategoriesSection from "../components/categoryCard/CategoriesSection";
import CategoryDetails from "../components/categoryCard/CategoryDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/errorPage/Error";
import ShopPage from "../pages/shop/ShopPage";
import CategoryDetailsPage from "../components/categoryCard/CategoryDetails";

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
            {
                path: '/shop',
                Component: ShopPage
            }, 
            {
                path: '/category/:categoryName',
                component: CategoryDetailsPage
            }
        ]
    },
]);
