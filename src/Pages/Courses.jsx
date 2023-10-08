import React from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CourseCard from '../Components/CourseCard';

const Courses = () => {
  const courses = [{
    title:"Economics",
    img:"./sub1.png"
  },{
    title:"Physics",
    img:"./sub1.png"
  },{
    title:"Literature",
    img:"./sub1.png"
  }]
  return (
    <>
    <div className='h-screen w-full bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 p-4'>
      <div className='border-none rounded-3xl bg-neutral-800 text-white font-semibold px-2 py-4'>
        <div className='flex justify-between p-4'>
          <div>Courses you're taking</div>
          <div>Filter by<ArrowDropDownRoundedIcon/></div>
        </div>
        <div className='grid grid-cols-2 gap-4 h-60 w-full'>
          {courses.map((course,index)=><CourseCard key={index} course={course}/>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default Courses
