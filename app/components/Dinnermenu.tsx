import React from 'react'
import DMenubox1 from './DMenubox1'
import Dmenubox2 from './Dmenubox2'

const Dinnermenu = () => {
    return (
        <div className="flex w-full p-10 bg-black h-full flex-col justify-evenly">
          <h1 className="text-4xl md:text-6xl text-center m-8">
            Dina Dinner Menu
          </h1>
        <div className="flex w-full justify-center items-center h-full">
          <DMenubox1 />
          <Dmenubox2 />
        </div>
        
      </div>
      
    )
    
}

export default Dinnermenu ;