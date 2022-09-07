import React from 'react'
import Card from './Card'
import { FaAmazon } from 'react-icons/fa'
import { FaFacebook, FaGoogle, FaMicrosoft } from 'react-icons/fa'


const Cards = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center content-center  '>
            <div className='basis-1/2' >
                <Card title="Product Added" numberCount={4444} bgColor='white' icons={<FaAmazon size='35' />} />
            </div>
            <div className='basis-1/2'>
                <Card title="Page Likes" numberCount={5000} bgColor='white' icons={<FaFacebook size='35' />} />
            </div>
            <div className="basis-1/2">
                <Card title="Google Photos" numberCount={6000} bgColor='white' icons={<FaGoogle size='35' />} />
            </div>
            <div className="basis-1/2">
                <Card title="Microsoft Products" numberCount={6040} bgColor='white' icons={<FaMicrosoft size='35' />} />
            </div>
        </div >
    )
}

export default Cards