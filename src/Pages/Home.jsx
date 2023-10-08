import React from 'react'
import Button from '@mui/material/Button'
import styles from '../styles/Styles'
import {staggerContainer, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import History from '../Components/History';
import Exceptional from '../Components/Exceptional';
const Home = () => {
  return (
    <div className='relative bg-gradient-to-r from-waterdark to-waterlight'>
      <div  className='h-screen w-screen'>
      <img src='./herobg1.png' className='absolute z-0 h-screen w-screen opacity-90 object-fit'/>
        <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <div className="flex justify-center items-center flex-col relative z-10 leading-loose">
              <motion.div
                variants={textVariant(1.1)}
                className="flex flex-row justify-center items-center"
              >
                <h2 className='text-6xl font-bold text-white leading-loose mt-16'>Welcome To EduVR</h2>
              </motion.div> 
              <motion.div
                variants={textVariant(1.2)}
                className="flex flex-row justify-center items-center"
              >
                <h2 className='text-2xl font-light text-white leading-loose'>Get into the World of Education in our Virtual World </h2>
              </motion.div>
              <motion.h2 variants={textVariant(1.3)} className='text-2xl font-light text-white leading-loose mt-48'>
                <Button variant="contained" onClick={()=>{}}>Explore More</Button>
              </motion.h2>
            </div>
          </motion.div>
        </section>
      </div>
      <History/>
      <Exceptional/>
    </div>
  )
}

export default Home
