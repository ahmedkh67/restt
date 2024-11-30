"use client "

import { comments } from '@/app/constants'
import React from 'react'
import { FaStar } from "react-icons/fa";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider1 from './Slider1';




const Rates = () => {
    
  return (
    <>    
    
        <div className="flex flex-col Rates_Background">
            <h1 className="text-center md:text-6xl text-4xl py-2 m-8">
                Our Custemrs says
            </h1>
            <Slider1 /> 
        </div>
        {/* <div className="flex md:flex-row flex-col justify-between">
        
        {comments.map((item) => (
                <div className="flex flex-col p-4 w-full">
                    <h1 className='md:text-4xl text-2xl text-center my-4'>
                        {item.title}
                    </h1>
                    <p className='md:text-4xl text-2xl text-center my-2'>
                        {item.name}
                    </p>
                    <div className="flex justify-center items-center">
                    {Array.from({length : item.stars}).map((_,index) => (
                        < FaStar className='text-yellow-300 m-2 w-7 h-7' />
                    ))}
                    </div>                    
                </div>                
            ))}

                 
            </div>       
        */}
        
         
    
    
    </>
  )
}

export default Rates