import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 p-4 mt-[400px]'>
        <div className='max-w-[1280px] mx-auto md:flex justify-between py-[30px]'>
            <div className='m-2 '>
                <h1 className=' text-[20px] md:text-[30px] font-bold text-white'>Want to improve software skills?</h1>
                <span className='text-white'>Sign up and stay up to date.</span>
            </div>
            <div className=' m-2'>
                <input type="text" className='p-3 mx-3 sm:w-full  rounded' placeholder='email' />
                <button className='mt-2 bg-black p-3 rounded-md text-white '>Get Started</button>
            <br />
            <p className='text-white'>
               your data is protected under our <br/> <a href="
               #" className='text-black'> privacy policy.</a>
            </p>
            </div>
        </div>
    </div>
  )
}
