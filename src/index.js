import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";

import Home from "./pages/home"
import Hometwo from "./pages/hometwo"
import Addcar from "./pages/addcar"

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home />,
  },
  {
    path:'/hometwo',
    element:<Hometwo />,
  },
  {
    path:'/addcar',
    element:<Addcar />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
