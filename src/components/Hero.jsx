import React from 'react'
// import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] justify-center flex flex-col h-screen mx-auto text-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='font-bold text-4xl md:text-7xl sm:text-6xl md:py-6'>Grow with data..</h1>
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> Fast, flexible financing for</p>
            {/* <Typed
            strings={['BTB','DTC', 'SASS']}
            typeSpeed={100}
            backSpeed={100}
            loop
            /> */}
        </div>
        <p className='md:2xl: text-xl font-bold text-gray-600 pl-4 pr-4'>Monitor your data analytics to increase revenue  for BTB ,BTC &SASS platform</p>
        <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md my-6 font-medium py-3 text-black'>Get Started</button>
    </div>
    
    </div>
  )
}

export default Hero