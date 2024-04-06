
import { Outlet } from 'react-router-dom'

import Footer from '../Footer'
import Navbar from '../Navbar'


function Layout() {
    
  return (
    <div className="text-white  min-h-screen bg-zinc-900">
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  )
}



export default Layout
