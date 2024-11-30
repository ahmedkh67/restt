import { Input } from 'postcss';
import React from 'react'
import Map from './Map';

const Contactssec = () => {
  return (
    <>
    <div className="flex w-full h-full justify-center items-center py-44">
    
        {/* must make compnent rather than regular html syntax  */}


            <div className="flex w-full lg:w-3/5 md:w-full sm:w-full bg-black h-full justify-center items-center flex-col p-4 mt-24">
                <h1 className="md:text-8xl text-5xl border-white border-b-[20px] border-double text-center pb-2
                text-white my-8">
                    Reserve a Table
                </h1>
                <div className="flex w-full m-2 justify-between flex-col md:flex-row">
                    <div className="flex md:w-3/4 w-full flex-col items-center justify-start md:mr-2 my-6">
                        <h1 className='text-3xl mx-2 w-full mb-2'>
                            Name
                        </h1>
                        <input type="text" name="inputname" id="inputname" className='w-full h-12 mx-2'/>
                    </div>
    
                    <div className="flex md:w-3/4 w-full flex-col items-center justify-start md:ml-2 my-6">
                        <h1 className='text-3xl mx-2 w-full mb-2'>
                            email
                        </h1>
                        <input type="email" name="inputemail" id="inputemail" className='w-full h-12 mx-2' />
                    </div>
                    
                </div>

                <div className="flex w-full  mx-4 flex-col items-center justify-start my-6">
                        <h1 className='text-3xl mx-2 w-full mb-2'>
                            Subject
                        </h1>
                        <input type="text" name="inputsubject" id="inputsubject" className='w-full h-12 mx-6' />
                </div>
                <div className="flex w-full  mx-4 flex-col items-center justify-start my-6">
                        <h1 className='text-3xl mx-2 w-full mb-2'>
                            Massage
                        </h1>
                        <input type="text" name="inputsubject" id="inputsubject" className='w-full h-36 mx-6' />
                </div>
            <button className="Button my-4">
                Submit
            </button>        
            </div>
            
        
    </div>
    <Map />
    </>

  )
}

export default Contactssec ;