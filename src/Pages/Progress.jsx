import React from 'react'
import { lineChartOptions} from "../utils/LineChartsOptions"
import { lineChartData } from "../utils/LineChartsData"
import LineChart from '../utils/Linechart';
import Navbar from '../Components/Navbar';

const Progress = () => {
  return (
    <div className='flex gap-4 h-screen w-screen'>
      <Navbar/>
      <div className='h-screen w-full ml-20 bg-graphitedark text-white flex gap-4 p-6 text-center'>
        <div className='w-1/3 flex flex-col gap-4'>
          <div className='h-1/3 w-full bg-graphitelight rounded-3xl p-4 flex flex-col'>teaching duration
            <div className='flex gap-4 items-center'>
              <div className="radial-progress text-tertiary" style={{"--value":70}}>70%</div>
              <div className='flex flex-col gap-4 justify-center'>VR/AR technology
              <progress className="progress progress-info w-56" value="40" max="100"></progress>Traditional
              <progress className="progress progress-info w-56" value="100" max="100"></progress>
              </div>
            </div>
          </div>
          <div className='h-1/2 w-full bg-graphitelight rounded-3xl p-4 '>classes schedule<div className='text-xs'><br></br>*Monday:*
          <div>9:00 AM - 10:30 AM: Introduction to VR Concepts</div>
          <div>11:00 AM - 12:30 PM: Exploring VR Conceptual Frameworks</div>
          <div>1:30 PM - 3:00 PM: VR Concept Applications</div>
          <br></br>
          <br></br><div className='text-center'>*Friday:*</div>
          <div>9:30 AM - 11:00 AM: VR Conceptual Discussions</div>
          <div>11:30 AM - 1:00 PM: VR Conceptual Projects</div>
          <div>2:00 PM - 3:30 PM: VR Conceptual Assessment</div>
          </div>
          </div>
        </div>
        <div className='w-2/3 flex flex-col gap-4'>
          <div className='h-1/2'><div>Our Student vs. Other students</div><LineChart
            lineChartData={lineChartData}
            lineChartOptions={lineChartOptions}/>
          </div>
          <div className='h-1/2 bg-graphitelight rounded-3xl p-4 text-lg font-bold'> VR Class Environment
          <div className='text-xs font-light text-justify mt-4'> Our VR class environments are designed to transport you to a new realm of learning. Interact with fellow students from around the world in a shared virtual space. Engage in hands-on, immersive experiences that make learning concepts a truly unforgettable adventure. Our classes are limited in size to ensure an intimate and collaborative atmosphere, where you can discuss, experiment, and discover together in the limitless possibilities of virtual reality. </div></div>
        </div>
      </div>
    </div>
  )
}

export default Progress
