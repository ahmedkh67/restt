import React from 'react'

function P1({head, title, bio, desc, btntitle}: string ) {
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
          <button className='Button mt-8 md:w-1/2 w-3/4 mx-4'>
            {btntitle}
          </button>
        </div>
      </>
    )
  }

export default P1