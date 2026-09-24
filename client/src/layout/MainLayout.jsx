import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Navbar />
      
      <div className='px-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
