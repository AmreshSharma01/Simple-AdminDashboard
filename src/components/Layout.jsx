import React from 'react'
import Cards from './Cards'
import SliderTest from './SliderTest'
import LineCharts from './Charts/LineCharts'
import TestChart from './Charts/TestChart'

import { data } from './datas/IotData'



// layout 1



const Layout = () => {
    return (
        <div className='relative'>

            <div className="grid grid-rows-6 grid-cols-5 gap-4 fixed w-full h-full"   >
                <div className=' bg-white border-0 shadow-lg border-sky-500 row-start-1 row-span-6 col-span-1 ml-4 mt-4 rounded-lg'><h1 className='text-xl font-bold mb-4 ml-3'>DashBoard</h1> <SliderTest /></div>
                <div className='mt-4 bg-white border-0 shadow-lg rounded-lg border-sky-500 row-start-1 row-span-2  col-start-2 col-span-4'> <Cards /></div>
                <div className='bg-white border-0 shadow-lg rounded-lg border-sky-500 row-start-3 row-span-2 col-start-2 col-span-4 '  >
                    <div className='max-w-2xl mt-3 ' >
                        <LineCharts data={data} width={500} height={400} />
                    </div>
                </div>

                <div className='mt-3 mb-3 bg-white border-0  border-sky-500 row-start-5 row-span-2 col-start-2 col-span-4 rounded-lg shadow-lg'>
                    <div className='max-w-2xl '>
                        <TestChart />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Layout




// layout 2

/*

const Layout = () => {
    return (
        <div class="grid grid-rows-3 grid-flow-col gap-4 h-screen">
            <div class=" bg-red-600 row-span-3"><01</div>
            <div class="bg-blue-600 col-span-2 ">02</div>
            <div class="bg-yellow-600 row-span-2 col-span-2">03</div>
        </div>
    )
}

export default Layout

*/