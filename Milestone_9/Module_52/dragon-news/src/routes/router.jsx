import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import Home from '../components/pages/Home';
import CategoryNews from '../components/pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                // index: true,
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>Authentication Layout</h2>
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    },
])

export default router;