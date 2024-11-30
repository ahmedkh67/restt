import React from 'react'
import Menubox1 from './Menubox1'
import Menubox2 from './Menubox2'


const Lunchmenu = () => {
  return (
    <div className="flex w-full p-10 bg-black h-full flex-col justify-evenly">
          <h1 className="Opacity_animate text-4xl md:text-6xl text-center m-8 ">
            Dina Lunch Menu
          </h1>
        <div className="flex w-full justify-center items-center h-full">
          <Menubox1 />
          <Menubox2 />
        </div>
        
      </div>
      
  )
}

export default Lunchmenu