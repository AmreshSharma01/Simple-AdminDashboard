import React, { useState } from 'react'

const styleOfEachFlex = 'm-3 p-5 cursor-pointer rounded w-full text-blackfont-medium hover:bg-gray-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-200'


const Sidebar = () => {

    // const [active, isActive] = useState(false)

    return (
        <div className='flex flex-col gap-4 items-center ' >
            {/* <div className='flex flex-row'> */}
            {/* <div className={`basis-11/12 invisible {styleOfEachFlex}`}>Products</div> */}
            <div className={styleOfEachFlex}>Products</div>

            {/* </div> */}
            <div className={styleOfEachFlex}>Users</div>
            <div className={styleOfEachFlex}>Settings</div>
            <div className={styleOfEachFlex}>Orders</div>
            <div className={styleOfEachFlex}>Messages</div>
            <div className={styleOfEachFlex}>Vendor List</div>
        </div>
    )
}

export default Sidebar