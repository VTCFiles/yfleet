import React, { useState } from 'react'
import AdminNavBar from '../components/AdminNavBar'
import SideNav from './SideNav'

const AdminLayout = ({children}) => {
    const [sideNav, setSideNav] = useState(true)
  return (
    <div className='flex relative'>
        <div className={`h-screen flex-none bg-black/75 text-white transition-all duration-500  ${sideNav? "w-[16rem]": "w-0 overflow-hidden"}`}>
            <SideNav />
        </div>
        <div className='relative h-screen overflow-y-auto flex-auto bg-neutral-100'>
            <AdminNavBar setSideNav={setSideNav} />
            
            {children}
            
        </div>

    </div>
  )
}

export default AdminLayout

