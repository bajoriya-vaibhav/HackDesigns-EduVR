import React from 'react'
import { useNavigate } from 'react-router'

const History = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-cream w-screen flex mt-52'>
      <div className='w-2/5 m-6 rounded-full bg-ginger flex '>
        <img src="./person1.png" className='h-4/5 w-4/5  m-auto object-cover'/>
      </div>
      <div className='w-1/2 m-auto p-4'>
        <div className='text-4xl font-semibold font-mono'>
          Our History and<br></br> Core Values
        </div>
        <div>
        EduVR was founded with a vision to revolutionize education through immersive VR technology. Established in 2020, we have since been at the forefront of the VR-based edtech industry, constantly innovating to provide engaging and effective learning experiences.
        </div>
        <button className='m-10 border-2 py-2 px-10  rounded-full' variant='outlined' onClick={()=>{navigate('/about')}}>Learn More</button>
      </div>
    </div>
  )
}

export default History
