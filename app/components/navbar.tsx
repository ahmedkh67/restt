import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Navbar2 from './navbar2';
 


const Navbar = () => {
  return (
    <>
    <div className="flex flex-col w-full">

    
      <div className='flex justify-between items-center
      px-5 w-full h-24
      '>
          <div className=" hidden mx-4 md:flex justify-start items-start px-4 flex-col ">
            <h1 className='text-start text-base'>madinah city</h1>
            <h1>5km from haram</h1>
          </div>
          <div className="mx-4 flex justify-center items-center px-4">
            <p className='text-6xl text-center'>Dina</p>
          </div>
          <div className="hidden mx-4 md:flex justify-end items-end px-4 flex-col">
            <p className='text-end'>+1 756 86 789</p>
            <p>Book menu now</p>
          </div>
          
      </div>

      <Navbar2/>
    </div>
    
    </>
  )
}



export default Navbar ;


