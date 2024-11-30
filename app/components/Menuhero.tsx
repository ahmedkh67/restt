import Link from 'next/link';
import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const Menuhero = () => {
    return (
        <div className='w-full flex justify-evenly h-full flex-col items-center'>
          <div className="flex flex-col justify-center items-center">
    <h1 className="text-6xl md:text-[230px] my-8">Our Menu</h1>
    
            <p className="text-3xl w-3/5 text-center">
            Where you can enjoy every bit of taste and feel the beauty of the simple fancy food and drinks by a specialist chefs
            </p>
            
          </div>   
            <button className='Button rounded-2xl'>
                <Link href={"#dis2"}>
                    <FaAngleDown />
                </Link>
            </button>
              
        </div>
      )
}

export default Menuhero ;