"use client"

import Image from "next/image";
import { Navbar, Hero, Moresec, Historysec, Distance, Menusec, Distance2, Rates, Teamsec, Contactssec, Slider2 } from "@/app/components";
import src from "./images/slider-1.jpg"
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Home() {
  return (
    <>
  <motion.div initial={{opacity:0, y:0}} animate={{opacity:1, y: 0}} transition={{duration: 0.8}}> 
    <div className="Homepage_background">
  
    <Navbar />
    <Hero />

  </div>
  </motion.div>
  <div className="flex w-full">
    
    
  </div>
  <Moresec />
  <Historysec />
  
  
    <Distance />
    <Menusec />
    
    <Distance2 />
    
    <Teamsec />
    <Rates />
    <Contactssec />
    </>
  );
}

