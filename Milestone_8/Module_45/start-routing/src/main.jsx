import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
const users2Promise= fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      { path: 'home', Component: Home },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },

      {
        path: 'users2/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:d',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.d}`),
        Component: PostDetails,
      },
      {
        path: '*',
        element: <h3>Ekhane kichu nai</h3>
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading.......</span>}>
          <Users2 users2Promise={users2Promise}></Users2>
        </Suspense>
      },
      {
        path: 'users2/:userId',
        loader: ({params})=>{
          console.log(params)
          fetch('https://jsonplaceholder.typicode.com/users')
        },
        Component: UserDetails
      }

    ]
  },
  {
    path: '/about',
    element: <div>This is about page</div>
  },
  {
    path: '/blogs',
    element: <div>This the My blogs</div>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
