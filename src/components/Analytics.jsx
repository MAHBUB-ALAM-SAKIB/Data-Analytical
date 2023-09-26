import React from 'react'
import Laptop from '../assets/laptop.jpg'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTIC DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione adipisci sunt iure, nam magni soluta expedita omnis consectetur, fugiat voluptates placeat quis! Quos consequuntur adipisci quidem maxime dolorem fuga reiciendis. Amet est doloremque ducimus?</p>
            <button className='w-[200px] rounded-md mx-auto bg-[#000300] py-3 my-6 font-medium text-[#00df9a] md:mx-0'>Get Started</button>
          </div>
       </div>
    </div>
  )
}

export default Analytics