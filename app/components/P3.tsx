import React from 'react'

function P3(head: string , title: string , bio: string , desc: string , btntitle: string ) {
    return (
      <>
      <div className="flex w-full border-0 border-whit flex-col md:items-start items-center">
          <h1 className="text-2xl">{head}</h1>
          <h1 className='text-5xl mb-8 py-2 border-b-8 border-white border-double'>{title}</h1>
          <h1 className='text-center md:text-start text-3xl w-3/4 '>{bio}
          </h1>
          <h1 className="text-center md:text-start text-3xl w-3/4 my-4 hidden md:flex">
          {desc}
  
          </h1>
        </div>
      </>
    )
  }
export default P3 ;