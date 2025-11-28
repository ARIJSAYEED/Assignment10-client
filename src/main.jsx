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
import MyExports from './Components/MyExports.jsx'
import MyImports from './MyImports.jsx'
import ExportProducts from './Components/ExportProducts.jsx'
import ImportProducts from './Components/ImportProducts.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import ProductDetails from './Components/ProductDetails.jsx'

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
      },
      {
        path: '/productDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/productDetails/${params.id}`),
        element:<ProductDetails></ProductDetails>
      },
      {
        path: '/myexports',
        element: <PrivateRoute>
          <MyExports></MyExports>
        </PrivateRoute>
      },
      {
        path: '/myimports',
        element: <PrivateRoute>
          <MyImports></MyImports>
        </PrivateRoute>
      },
      {
        path: '/exportProducts',
        element: <PrivateRoute>
          <ExportProducts></ExportProducts>
        </PrivateRoute>
      },
      {
        path: '/importProducts',
        element: <PrivateRoute>
          <ImportProducts></ImportProducts>
        </PrivateRoute>
      }
    ]
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
