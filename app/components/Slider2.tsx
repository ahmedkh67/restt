"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Our custom button component
// import SliderButtons from "./SliderButtons";


const Slider2 = () => {
  return (
    
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,Scrollbar]}
    spaceBetween={20}
    slidesPerView={4}
    navigation
    scrollbar
    loop={true}
    autoplay={true}
    className="w-full px-6 m-8" >
        
            <SwiperSlide>
                <div className="Mslide1 flex  m-2 h-96 w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide2 flex  m-2 h-full w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide3 flex  m-2 h-full w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide4 flex  m-2 h-full w-full">

                </div>
            </SwiperSlide>              
                     
            <SwiperSlide>
                <div className="Mslide1 flex  m-2 h-96 w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide2 flex  m-2 h-full w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide3 flex m-2 h-full w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide4 flex m-2 h-full w-full">

                </div>
            </SwiperSlide>              
                     
            <SwiperSlide>
                <div className="Mslide1 flex m-2 h-96 w-full">

                </div>
            </SwiperSlide>              
            <SwiperSlide>
                <div className="Mslide2 flex m-2 h-full w-full">

                </div>
            </SwiperSlide>              
               
    </Swiper>

  );
};

export default Slider2 ;