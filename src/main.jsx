import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chart from './components/chart/chart';
import Home from './components/Home/Home';
import Users from './components/users/Users';
import UserDetails from './components/users/UserDetails';
import Posts from './components/post/Posts';
import PostDetails from './components/post/PostDetails';
import ErrorPage from './components/Errorpage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/Chart",
        element: <Chart></Chart>
      },
      {
        path: "/About",
        element: <div>this is About page</div>
      },
      {
        path: "/Service",
        element: <div>this is Service page</div>
      },
      {
        path: "/post",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>
      },
      {
        path: '/Users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/User/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
