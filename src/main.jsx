import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
   
    </AuthProvider>

  </React.StrictMode>,
)
