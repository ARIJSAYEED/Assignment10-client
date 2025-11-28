import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import HomeLayout from './Layout/HomeLayout.jsx'
import AllProducts from './Components/AllProducts.jsx'
import AuthLayout from './Layout/AuthLayout.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/allproducts',
        loader: () => fetch('http://localhost:3000/products'),
        element: <AllProducts></AllProducts>
      }
    ]
  },
  {
    path: '/productsDetails/:id',
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
