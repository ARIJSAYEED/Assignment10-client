import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import HomeLayout from './Layout/HomeLayout.jsx'
import AllProducts from './Components/AllProducts.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        index:true,
        element:<HomeLayout></HomeLayout>
      },
      {
        path:'/allproducts',
        loader:()=>fetch('http://localhost:3000/products'),
        element:<AllProducts></AllProducts>
      }
    ]
  },
  {
    path:'/productsDetails/:id',
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
