import React from 'react'
import { lineChartOptions} from "../utils/LineChartsOptions"
import { lineChartData } from "../utils/LineChartsData"
import LineChart from '../utils/Linechart';

const Progress = () => {
  return (
    <div className='h-screen bg-graphitedark text-white flex gap-4 p-6 text-center'>
      <div className='w-1/3 flex flex-col gap-4'>
        <div className='h-1/4 w-full bg-graphitelight rounded-3xl p-4 '>teaching duration</div>
        <div className='h-1/2 w-full bg-graphitelight rounded-3xl p-4 '>classes schedule</div>
      </div>
      <div className='w-2/3 flex flex-col gap-4'>
        <div className='h-1/2'><div>Our Student vs. Other students</div><LineChart
          lineChartData={lineChartData}
          lineChartOptions={lineChartOptions}/>
        </div>
        <div className='h-1/2 bg-graphitelight rounded-3xl p-4 '>class situation</div>
      </div>
    </div>
  )
}

export default Progress
