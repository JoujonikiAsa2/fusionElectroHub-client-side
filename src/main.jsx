import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Layout/Root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './Pages/Home/HomePage';
import Products from './Pages/Products/Products';
import AddProducts from './Pages/AddProducts/AddProducts';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './AuthProvider/AuthProvider';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartDetails from './components/CartDetails/CartDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('https://fusion-electro-hub-server-side-qou1w1gc1.vercel.app/products')
      },
      {
        path: '/signIn',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <Registration></Registration>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/products',
        element: <PrivateRoute><Products></Products></PrivateRoute>,
        loader: () => fetch("https://fusion-electro-hub-server-side-qou1w1gc1.vercel.app/products")
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://fusion-electro-hub-server-side-qou1w1gc1.vercel.app/products/${params.id}`)
      },
      {
        path: '/cartDetails',
        element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>,
        loader: () => fetch(`https://fusion-electro-hub-server-side-qou1w1gc1.vercel.app/carts`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://fusion-electro-hub-server-side-qou1w1gc1.vercel.app/products/${params.id}`)
      },
      {
        path: '/products/brand/:brandName',
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://fusion-electro-hub-server-side-qou1w1gc1.vercel.app/products/brand/${params.brandName}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
