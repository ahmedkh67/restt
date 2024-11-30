import React from 'react'
import { dinnermenu1, dinnermenu2 } from '../constants'
import Image from 'next/image'

const Dmenubox2 = () => {
    
    {if(dinnermenu1.length >= 5) {
        return (
          
          <div className="flex w-full flex-col-reverse justify-between items-center p-24 h-full">
          <div className="DMenubox2_BackGround2 flex w-full h-80 my-5">
            
          </div>
          <div className="MenuCellsContainer2 flex w-full h-full bg-neutral-900 my-5 flex-col justify-center items-center p-4">
            {dinnermenu2.map((item) => (
                <div className="flex w-full h-40  p-4 items-center">
                  <div className="flex justify-center items-center w-1/4 bg-black h-full m-2">
                    <Image src={item.foodimg} alt={'wdw'} width={100} height={100} />
                  </div>
                  <div className="flex-col w-full h-full  m-2 ">
    
                    <div className="flex w-full h-1/2 justify-between items-center ">
                      <h1 className="text-4xl">
                        {item.foodname}
                      </h1>
                      <h1 className="text-6xl">
                        {item.foodprice}
                      </h1>
                    </div>
                    <div className="flex w-full h-1/2 justify-start items-center ">
                      <h1 className="text-2xl text-slate-500">{item.fooddes} 
                        
                      </h1>
                     
                    </div>
                    
                  </div>
    
                </div>
            ))}
            
          </div>
    
          </div>
    
        )
      }}
     
      
}

export default Dmenubox2 ;