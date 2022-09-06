import React from 'react'


const Card = ({ title, numberCount, bgColor, icons }) => {
    return (

        <div className={` max-w-md flex flex-row  justify-between bg-${bgColor}-0 text-black rounded-lg py-2 px-3 m-3 font-bold cursor-pointer border-2 shadow-lg hover:bg-gray-300  hover:duration-200`}>

            <div className='p-5 '>
                <h3 className='uppercase '>{title}</h3>
                <h1 className=' font-bold '>{numberCount}</h1>
            </div>
            <div className='p-5 '>
                {icons}
            </div>

        </div>

    )
}

export default Card