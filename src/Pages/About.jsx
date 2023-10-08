import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';


function About()  {
  return (
    <>
    <div className='flex gap-10'>
      <Navbar/>
      <div className='ml-40 h-screen w-screen'>
      <AnimatePresence>
      <motion.div
        className="aboutx"
        key="modal"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}>

        <h1 style={{fontSize:"4.5em", transform:"translateY(-40%)"}} className='text-left mt-20'>
          <span className='magic'>
            ABOUT  
            US 
          </span>
        </h1>
        <div className='about'>
        <div className='abt-img ml-36 mt-20'>
          <img src='./abtImg.png'></img>
        </div>
        <div className='abt-p'>
          <p>
          At EDU-VR, we are passionate about giving an immersive environment for online learners. With a commitment to excellence and innovation, we've built a community that thrives on shared goals and achievements. Our journey is fueled by the dedication of our team and the relationships we've forged. Join us in shaping the future of [your industry] as we continue to push boundaries and deliver quality solutions.
          </p>
        </div>
        </div>
        <div id='a' />
        <div id='a1' />
        <div id='a' style={{top:"25%", left:"70%"}}/>
        <div id='a' style={{top:"5%", left:"65%"}}/>
        <div id='a' style={{top:"-8%", left:"75%"}}/>
        <div id='a' style={{top:"20%", left:"81%"}}/>
        <div id='a' style={{top:"23%", left:"55%"}}/>
        <div id='a2' />
      </motion.div>
      </AnimatePresence>
      </div>
    </div>
    </>
  )
}
export default About