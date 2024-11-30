import React from 'react'

function P3(head: any , title: any) {
    return (
      <>
      <div className="flex w-full border-0 border-whit flex-col md:items-start items-center">
          <h1 className="text-2xl">{head}</h1>
          <h1 className='text-5xl mb-8 py-2 border-b-8 border-white border-double'>{title}</h1>
          <h1 className='text-center md:text-start text-3xl w-3/4 '>
          Welcome to Dina, a modern restaurant with a focus on premium food tastes
          </h1>
          <h1 className="text-center md:text-start text-3xl w-3/4 my-4 hidden md:flex">
          We invite you to celebrate our restaurant's delicious recipes whether you are here for a business lunch or dinner. Discover new tastes and inspired recipes from all over the world
  
          </h1>
        </div>
      </>
    )
  }
export default P3 ;