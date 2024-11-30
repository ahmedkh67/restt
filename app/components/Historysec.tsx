import React from 'react'
import Image from 'next/image'
import P1 from './P1'

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


//py-8 md:py-16
{/* p1 should be animated opacity */}
const Historysec = () => {
  return (
    <>
    
    <div className="flex flex-col-reverse md:flex-row md:px-8 md:py-48 py-32">

        <P1
        
        head="About"
        title="History"
        bio=' "Welcome to Dina, a modern restaurant with a focus on premium food tastes" '
        desc="We invite you to celebrate our restaurant's delicious recipes whether you are here for a business lunch or dinner. Discover new tastes and inspired recipes from all over the world"
        btntitle="Find more"
         />
        
        <P2 />

      
      </div>
    
    </>
  )
}


export default Historysec ;