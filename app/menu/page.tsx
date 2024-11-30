"use client "

import React from 'react'
import {Dinnermenu, Distance2 , Lunchmenu,Menuhero, Menusec, Navbar, Contactssec, Map, Rates, Menudistance, Slider2, Teamsec } from '../components';


const page = () => {
  return (
    <>
    <div className="Menupage_background">
      <Navbar />
      <Menuhero />
      
      

    </div>

      <Menudistance id="dis2" />
      <Lunchmenu />
      <div className="flex px-2 Slider2">
        <Slider2 />
      </div>
      <Dinnermenu />
      <Teamsec />
      <div className="flex px-2">
        <Slider2 />
      </div>
      <div className="px-12 pb-24 flex justify-between items-center w-full">
        <h1 className="text-8xl">
          Check Our Gallery
        </h1>
        <button className='Button'>
          See more
        </button>
      </div>
      <Rates />
      
      <Contactssec />
      
    </>
  )
}

export default page ;