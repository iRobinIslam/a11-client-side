import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import AuthProvider from './context/AuthContext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
