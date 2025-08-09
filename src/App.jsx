import React from 'react'
import AdminLayout from './AdminLayout/AdminLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import UserManagement from './pages/UserManagement/UserManagement'
import ProductManagement from './pages/ProductManagement/ProductManagement'
import EditProduct from './pages/EditProduct/EditProduct'
import OrderManagement from './pages/OrderManagement/OrderManagement'
import Category from './pages/Cartegory/Category'
import Setting from './pages/Setting/Setting'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/usermanagement",
          element: <UserManagement />
        },
        {
          path: "/productmanagement",
          element: <ProductManagement />
        },
        {
          path: "/edit/:id",
          element: <EditProduct />
        },
        {
          path: "/ordermanagement",
          element: <OrderManagement />
        },
        {
          path: "/category",
          element: <Category />
        },
        {
          path: "/settings",
          element: <Setting />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App