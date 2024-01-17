import React from 'react'
import imglaptop from '../assets/img/imglaptop.jpg'
export default function Masters() {
  return (
    <div className='max-w-[1240px] p-3  mx-auto h-[200px]  md:grid grid-cols-2 '>
        <div className=' col-span-1 md:w-[80%] text-center'>
            <img src={imglaptop} alt="" className='inline my-4 rounded-md h-[300px] md:h-[400px]' />
        </div>
        <div className=' col-span-1 flex flex-col justify-center'>
            <h1 className='text-blue-500 font-bold mt-3'>Learn from Masters</h1>
            <p className='mt-2 text-justify'>This is very unique approach to learning.All lectures will be provided and after getting basic knowlwge you will be directlty working on project with seniors and your teammates which will improve your teamwork.</p>
        <button className='mt-4 mb-2 w-[30%] bg-black p-3 rounded-md text-white '>Get Started</button>
        </div>
    </div>
  )
}


