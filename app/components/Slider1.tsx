"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { comments } from "@/app/constants";
import { FaStar } from "react-icons/fa";


// Our custom button component
// import SliderButtons from "./SliderButtons";


const Slider1 = () => {
  return (
    
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination,Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        scrollbar
        loop={true}
        autoplay={true}
        className="md:w-4/5 w-full m-8" >
            {comments.map((item) => (
                <SwiperSlide>
                    <div className="flex flex-col p-4 w-full items-center">
                        <h1 className='md:text-4xl text-2xl text-center my-4 w-1/2 drop'>
                            {item.title}
                        </h1>
                        <p className='md:text-4xl text-2xl  my-2 w-1/2 text-center'>
                            {item.name}
                        </p>
                        <div className="flex justify-center items-center w-1/2">
                        {Array.from({length : item.stars}).map((_,index) => (
                            <FaStar className='text-yellow-300 m-2 w-7 h-7' />
                        ))}
                        </div>                    
                    </div>  
                </SwiperSlide>              
                ))}
        
        </Swiper>
    
  );
};

export default Slider1;