import { Avatar } from '@mui/material'
import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux';

export default function Navbar() {
  const {task,auth}=useSelector(store=>store)
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-0 flex justify-between items-center'>
      <p className='font-bold text-lg'>Shiva Task Manager</p>
      
      <div className='flex items-center gap-5'>
        <p>{auth.user?.fullName}</p>
        <Avatar src='data:image/png;base64,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'></Avatar>
      </div>
    </div>
    
  )
}
