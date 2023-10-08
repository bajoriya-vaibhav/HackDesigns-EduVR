import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { abtImg } from '../assets';


function About()  {
  return (
    <AnimatePresence>(
        <motion.div
          className="intro"
          key="modal"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}>

          <h1 style={{fontSize:"14em"}}>
            <span className='magic'>
              ABOUT  
              US 
            </span>
          </h1>

          <div className='about'>
          <div className='abt-img'>
            <img src={abtImg}></img>
          </div>
          <div className='abt-p'>
            <p>
            At EDU-VR, we are passionate about giving an immersive environment for online learners. With a commitment to excellence and innovation, we've built a community that thrives on shared goals and achievements. Our journey is fueled by the dedication of our team and the relationships we've forged. Join us in shaping the future of [your industry] as we continue to push boundaries and deliver quality solutions.
            </p>
          </div>

          </div>

          
          <div id='a' />
          <div id='a1' />
          <div id='a' style={{top:"28%", left:"70%"}}/>
          <div id='a' style={{top:"10%", left:"68%"}}/>
          <div id='a' style={{top:"0%", left:"80%"}}/>
          <div id='a' style={{top:"20%", left:"84%"}}/>
          <div id='a' style={{top:"26%", left:"58%"}}/>
          <div id='a2' />

        </motion.div>)
        </AnimatePresence>
  )
}
export default About