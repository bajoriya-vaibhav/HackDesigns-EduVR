import React from 'react'

const Exceptional = () => {
  return (
    <div className='h-screen bg-cream w-screen flex'>
      <div className='w-1/2 m-auto p-4'>
        <div className='text-4xl font-semibold font-mono'>
          Exceptional<br></br> Education
        </div>
        <div>
        Our App is one of the best virtual reality education platform which is the only platform providing education the modern VR and Ar Technologies without any cost. It is having data-saver mode also so that there is no problem of slow-internet. SO ge ready for an exciting journey of learning with us! EduVR😊
        </div>
        <button className='m-10 border-2 py-2 px-10  rounded-full' variant='outlined'>checkout Courses</button>
      </div>
      <div className='w-2/5 m-6 rounded-full bg-peach flex '>
        <img src="./person3.png" className='h-4/5 w-4/5  m-auto object-cover'/>
      </div>
    </div>
  )
}

export default Exceptional
