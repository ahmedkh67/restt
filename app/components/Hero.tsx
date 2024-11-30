"use client"

import React from 'react'
import { motion } from 'framer-motion';

{/* fix the width of "welcome "
   for the md devices only */}

const Hero = () => {
  return (
    <div className='w-full flex justify-evenly h-full flex-col items-center'>
      <div className="flex flex-col justify-center items-center">
        <motion.div initial={{opacity:0, y:0}} animate={{opacity:1, y: 0}} transition={{duration: 2}} > 
        <h1 className="text-6xl md:text-[230px] my-8">Welcome</h1>
        </motion.div>
        
        <p className="text-xl w-4/5 text-center">
        best traditional dishes with local products of highest qualityies
        </p>
        
      </div>
      
       <motion.div initial={{opacity:0, y:15}} animate={{opacity:1, y: 0}} transition={{duration: 2}} > 
        <button className='Button'>
            Read More
        </button>
       </motion.div> 
        
    </div>
  )
}

export default Hero ;
