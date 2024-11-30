"use client "

import React from 'react'
import { P3 } from '.';





const Teamsec = () => {

  return (
    <>
    <div className="flex w-full md:flex-row flex-col p-16 pt-48">
        <P3
            head="Our Team"
            title="Meet our Chefs"
            bio=' "Welcome to Dina, a modern restaurant with a focus on premium food tastes" '
            desc="We invite you to celebrate our restaurant's delicious recipes whether you are here for a business lunch or dinner. Discover new tastes and inspired recipes from all over the world"
           
        />
        {/* putting images instead of divs vv  */}
        <div className="flex w-full justify-evenly md:flex-row flex-col-reverse items-center">

            <div className="flex md:w-1/2 w-full m-2 bg-red-300 h-96 flex-col justify-end items-center teampic1 
            overflow-hidden">
                <div className="flex bg-black w-full justify-center flex-col py-4 transition-[0.5s]">
                    <h1 className="text-4xl text-center">
                        Soffia harry
                    </h1>
                    <p className='text-lg text-center'>
                    Owner
                    </p>
                    
                </div>
                
                
            </div> 
           
            <div className="flex md:w-1/2 w-full m-2 bg-red-300 h-96 flex-col justify-end items-center teampic2
            overflow-hidden ">
                <div className="flex bg-black w-full justify-center flex-col py-4 transition-[0.5s]">
                        <h1 className="text-4xl text-center">
                            Mark henry
                        </h1>
                        <p className='text-lg text-center'>
                            Chef
                        </p>
                       
                </div>

            </div>
        
        </div>
    </div>
    <div className="flex w-full justify-center items-center pb-40">
        <button className='Button mb-14 contactbtn'>
            Contact us
        </button>
    </div>
    
    </>
    
  )
}


export default Teamsec