import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './Pages/Home.jsx'
import About_us from './Pages/About_us.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'

// import About from './components/About.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} /> 
      <Route path='about' element={<About_us/>} /> 
      <Route path='service' element={<Services/>} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
