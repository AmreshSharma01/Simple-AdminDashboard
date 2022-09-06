import React, { useState } from 'react'

const styleOfEachFlex = 'm-3 p-5 cursor-pointer hover:bg-gray-300 hover:rounded-lg hover:duration-300 w-full text-black'


const SliderTest = () => {

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

export default SliderTest