"use client"

import React from 'react'
import Image from 'next/image'
import { BiDrink } from "react-icons/bi";
import { GiChickenOven } from "react-icons/gi";
import { morecontent } from '@/app/constants';





function MoreBox(props: string ) {

    return (
        <>
        {morecontent.map((item) => (

            <div className="flex justify-between md:w-full py-4 px-2 flex-col border-4 m-6 lg:m-20
             border-white transition-[0.3s] moreCard">
            <div className="flex my-2 w-full items-center flex-col">
                <Image src={item.srcs}
                 alt={'wdaswd'} width={80} height={100} className='mix-blend'/>               
            </div>
            <div className="flex w-full flex-col justify-evenly items-center p-2">
                <h1 className="text-3xl my-2 text-white font-bold text-center">
                    {item.title}
                </h1>
                <p className='text-2xl text-white text-center'>
                    {item.desc}
                </p>
                
            </div>
            <div className="flex w-full justify-center">
            <button className="Button rounded-0 text-white border-white border-4 mt-12">
                    Find more
            </button>
            </div>
            
            
        </div>
        
       ))}
       </>
       
    )

}

const Moresec = () => {
  return (
    <div className='flex w-full py-32 moreSec'>
        <div className="md:flex w-full">
            <MoreBox />           
        </div>
    </div>
  )
}



export default Moresec