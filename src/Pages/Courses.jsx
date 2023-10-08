import React from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CourseCard from '../Components/CourseCard';
import Navbar from '../Components/Navbar';

const Courses = () => {
  const courses = [{
    title:"Economics",
    img:"./sub1.png",
    status:"Completed",
  },{
    title:"Physics",
    img:"./sub1.png",
    status:"In Progress"
  },{
    title:"Literature",
    img:"./sub1.png",
    status:"In Progress"
  }]
  const NewCourses = [{
      title:"Biology",
      img:"./sub1.png",
      status:"Enroll"
    },{
      title:"Chemistry",
      img:"./sub1.png",
      status:"Enroll"
    },{
      title:"Maths",
      img:"./sub1.png",
      status:"Enroll"
    }]

  return (
    <>
    <Navbar/>
    <div className='ml-20 h-screen bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 p-4'>
      <div className='border-none rounded-3xl bg-neutral-800 text-white font-semibold px-6 py-4 mb-6 text-3xl'>
        Course Section
      </div>
      <div className='border-none rounded-3xl bg-neutral-800 text-white font-semibold px-2 py-4'>
        <div className='flex justify-between p-4'>
          <div>Courses you're taking</div>
          <div>Filter by<ArrowDropDownRoundedIcon/></div>
        </div>
        <div className='grid grid-cols-2 gap-4 h-60 w-full'>
          {courses.map((course,index)=><CourseCard key={index} course={course}/>)}
        </div>
      </div>
      <div className='border-none rounded-3xl bg-neutral-800 text-white font-semibold px-6 py-4 mt-6 text-lg'>
        <div className='flex justify-between p-4'>
          <div>More Courses</div>
          <div>Filter by<ArrowDropDownRoundedIcon/></div>
        </div>
        <div className='grid grid-cols-2 gap-4 h-60 w-full'>
          {NewCourses.map((course,index)=><CourseCard key={index} course={course}/>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default Courses
