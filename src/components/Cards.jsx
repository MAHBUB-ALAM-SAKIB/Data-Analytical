import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] mx-auto bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                    <p className='py-2 border-b mx-8'>1 granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] mx-auto rounded-md  my-6 font-medium py-3 px-6 bg-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 bg-gray-100 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] mx-auto bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Double Users</h2>
                <p className='text-center text-4xl font-bold'>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB storage</p>
                    <p className='py-2 border-b mx-8'>2 granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                </div>
                <button className='bg-black w-[200px] mx-auto rounded-md  my-6 font-medium py-3 px-6 text-[#00df9a]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] mx-auto bg-transparent' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple Users</h2>
                <p className='text-center text-4xl font-bold'>$450</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 TB GB storage</p>
                    <p className='py-2 border-b mx-8'>3 granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] mx-auto rounded-md  my-6 font-medium py-3 px-6 bg-black'>Start Trial</button>
            </div>


        </div>

    </div>
  )
}

export default Cards