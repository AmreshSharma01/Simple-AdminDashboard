import React from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'
import LineCharts from './Charts/LineCharts'
import TestChart from './Charts/TestChart'

import { data } from './datas/IotData'



// layout 1



const Layout = () => {
    return (
        <div className='mx-60'>

            <div className="grid grid-rows-6 grid-cols-5 gap-4"   >
                <div className=' bg-white border-2 shadow-lg row-start-1 row-span-6 col-span-1 ml-4 mt-4 rounded-lg'><h1 className='text-xl font-bold pt-2 mb-4 ml-3'>DashBoard</h1> <Sidebar /></div>
                <div className='mt-4 mb-3 bg-white border-2 shadow-lg rounded-lg row-start-1 row-span-2  col-start-2 col-span-4'> <Cards /></div>
                <div className='pt-1 bg-white border-2 shadow-lg rounded-lg row-start-3 row-span-2 col-start-2 col-span-4 transition ease-in-out hover:bg-gray-100 hover:-translate-y-3 duration-200 '  >
                    <div className='max-w-2xl mt-3 m-auto' >
                        <LineCharts data={data} width={500} height={400} />
                    </div>
                </div>

                <div className='mt-3 mb-3 pt-3 bg-white border-2  row-start-5 row-span-2 col-start-2 col-span-4 rounded-lg shadow-lg transition ease-in-out hover:bg-gray-100 hover:-translate-y-3 duration-200'>
                    <div className='max-w-2xl m-auto '>
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