import React from 'react'
import Slidebar from '../Slidebar/Slidebar'
import TaskList from '../TasskList/TaskList'

export default function Home() {
  return (
    <div className='lg:flex px-5 lg:px-20 pt-[2.9vh]'>
      <div className='hidden lg:block w-[25vw] relative'>
        <Slidebar/>
      </div>
      <div className='right-side-part w-full flex justify-center mb-10'>
    <TaskList></TaskList>

      </div>
    </div>
  )
}
