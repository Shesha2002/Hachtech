import React,{ useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


export default function  Header(){
    {/*here we will manage state false by which we have not to show menu at start*/}
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 p-4'>
<div className='max-w-[1240px] py-5  items-center  flex justify-between mx-auto'>
  <div className='text-5xl font-bold'>
    Hackthon tech
    </div>
    {
        /*on toggle shows closing bar */
    }
     {
        toggle?
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className='"text-white text-2xl md:hidden block' />
        
   :

   <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
     }
<ul className='  hidden md:flex text-white gap-10 '>
    <li>Home</li>
    <li>Company</li>
    <li>Resourses</li>
    <li>About</li>
    <li>Contact</li>
</ul>

{/*responsive navbar */}
<ul className={`duration-300 text-white  w-full h-screen md:hidden gap-10  top-[107px] fixed bg-black 
${toggle ? 'left-[0]' : 'left-[-100%]'}
`}>
     <li className='p-5'>Home</li>
    <li className='p-5' >Company</li>
    <li className='p-5'>Resourses</li>
    <li className='p-5' >About</li>
    <li className='p-5'>Contact</li>
</ul>
</div>
        </div>
       
    )
}