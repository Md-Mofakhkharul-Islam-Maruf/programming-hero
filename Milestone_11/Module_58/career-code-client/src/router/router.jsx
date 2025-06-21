import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../routes/PrivateRoute";
import JobDetails from "../Pages/jobDetails/JobDetails";
import JobApply from "../Pages/jobApply/JobApply";

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
        Component: Register,
      },
      {
        path: '/signIn',
        Component: SignIn,
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: '/jobs/:id',
        Component: JobDetails,
        loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
      }
    ]
  },
]);

export default router;