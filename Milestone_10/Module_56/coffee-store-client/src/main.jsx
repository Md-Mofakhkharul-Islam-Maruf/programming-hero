import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import AddCoffee from './component/AddCoffee.jsx'
import UpdateCoffee from './component/UpdateCoffee.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        loader: ()=> fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: '/addCoffee',
        Component: AddCoffee,
      },
      {
        path: '/UpdateCoffee',
        Component: UpdateCoffee,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
