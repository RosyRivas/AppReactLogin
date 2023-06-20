import ReactDOM from 'react-dom';
import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="login"/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/user",
      element: <User/>,
    },
    {
        path: "/",
        element: <Navigate to="login"/>,
        errorElement: <ErrorPage/>,  
      },
  ]);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );