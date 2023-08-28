import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

// importamos el provider de react-router-dom
//importamos el router que hemos creado

//con esto ya no necesitamos el App


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
