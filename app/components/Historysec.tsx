import React from 'react'
import Image from 'next/image'
import P4 from './P4'

const c = "https://matchthemes.com/demohtml/dina/images/home/about-10.jpg"



const P2 = () => {
  return (
    <>
    <div className="flex border-0 border-white w-full md:w-3/4 p-4"> 
        <div className="flex Historysec_img items-center ">

        </div>
        
      </div>
    </>
  )
}


const Historysec = () => {
  return (
    <>
    
    <div className="flex flex-col-reverse md:flex-row md:px-8 md:py-48 py-32">

        <P4
        head="About"
        title="History"
         />
        
        <P2 />

      
      </div>
    
    </>
  )
}


export default Historysec ;