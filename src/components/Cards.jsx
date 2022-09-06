import React from 'react'
import Card from './Card'
import { FaAmazon } from 'react-icons/fa'

const Cards = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center content-center ml-10 mt-5 '>
            <div className='basis-1/2' >
                <Card title="Product Added" numberCount={4444} bgColor='white' icons={<FaAmazon size='35' />} />
            </div>
            <div className='basis-1/2'>
                <Card title="Product Added" numberCount={4444} bgColor='white' icons={<FaAmazon size='35' />} />
            </div>
            <div className="basis-1/2">
                <Card title="Product Added" numberCount={4444} bgColor='white' icons={<FaAmazon size='35' />} />
            </div>
            <div className="basis-1/2">
                <Card title="Product Added" numberCount={4444} bgColor='white' icons={<FaAmazon size='35' />} />
            </div>
        </div >
    )
}

export default Cards