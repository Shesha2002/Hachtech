import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 w-full py-[100px] font-bold'>
         <div className='max-w-[1240px] mx-auto text-center my-[100px]'>
<div className='text-2xl  md:text-3xl'>
    Learn with us
</div>
<h2 className='text-white   text-5xl md:text-[80px] mt-5'>Grow with us</h2>
<div className=' text-[25px] md:text-[50px] text-white mt-5 '>
    Learn 
      <Typed
      className='pl-3'
                    strings={['Data Structure And Algorithems','Web development','Artificial intelligence ']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                />
</div>
<button className='mt-2 bg-black p-3 rounded-md text-white '>Get Started</button>
         </div>
    </div>
 
   
    )
}
