import React from 'react'


const Card = ({ title, numberCount, bgColor, icons }) => {
    return (

        <div className={` max-w-md flex flex-row  justify-between bg-${bgColor}-0 text-black rounded-lg py-2 px-3 m-3 font-bold cursor-pointer border-2 shadow-lg hover:-translate-y-2 hover:bg-gray-200 transition ease-in-out duration-200`}>

            <div className='p-5 '>
                <h3 className='uppercase '>{title}</h3>
                <h1 className=' font-bold '>{numberCount}</h1>
            </div>
            <div className='p-5 m-2 bg-teal-300 rounded-lg'>
                {icons}
            </div>

        </div>

    )
}

export default Card