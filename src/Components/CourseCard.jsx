import { Button } from '@mui/material';
import React from 'react'

const CourseCard = ({course}) => {
  const {title,img,status} = course;
  return (
    <div className='border-none rounded-3xl p-2 flex items-center font-light text-white text-xl overflow-hidden h-30 w-full bg-neutral-700'>
      <img src={`${img}`} className='h-full  border-none rounded-3xl bg-neutral-900 object-contain'/>
      <div className='flex-1 flex flex-col text-left px-3'>
        <div className='text-sm font-bold'>{title}</div>
        <div className='text-xs'>Details</div>
      </div>
      <button className='bg-green-300 text-black text-xs font-semibold p-2 rounded-3xl'>{status}</button>
    </div>
  )
}

export default CourseCard
