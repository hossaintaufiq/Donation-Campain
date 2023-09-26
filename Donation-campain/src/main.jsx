import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import myCreateRouter from './Router/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRouter} >
    <Route/>
  </RouterProvider>
  </React.StrictMode>,
)
