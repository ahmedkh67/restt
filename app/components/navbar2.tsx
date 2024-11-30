"use client"
import React from 'react'
import Link from 'next/link';
import {motion } from 'framer-motion' ;


const Navbar2 = () => {
  return (
    <>
    <div className='flex w-full
     justify-around items-center px-32'>
        <motion.div initial={{opacity:0, x:-50}} 
            animate={{opacity:1, x: 0}} 
            transition={{duration: 0.5}} >
                <Tap text="Home" href="./menu" />
        </motion.div>
        <motion.div initial={{opacity:0, x:-60}} 
            animate={{opacity:1, x: 0}} 
            transition={{duration: 0.7}} >
                <Tap text="Menu" href="./" />
        </motion.div>
        <motion.div initial={{opacity:0, x:-70}} 
            animate={{opacity:1, x: 0}} 
            transition={{duration: 0.9}} >
                <Tap text="Gallery" href="" />
        </motion.div>
        <motion.div initial={{opacity:0, x:-80}} 
            animate={{opacity:1, x: 0}} 
            transition={{duration: 1.1}} >
                <Tap text="Contacts" href="" />
                
        </motion.div>
        
            
    
    </div>
    </>
  )
}

function Tap(props: any) {
    return (
        <Link href={props.href}>
            <h1 className='hidden md:flex text-2xl hover:scale-[112%]  transition-[3s] drop-shadow-md shadow-black text-center'>
                {props.text}
            </h1>
        </Link>
    )
}
export default Navbar2 ;

