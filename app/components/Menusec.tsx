import React from 'react'
import P1 from './P1'

//md:py-16
const Menusec = () => {
  return (
    <>
    <div className="bg-transparent flex flex-col md:flex-row md:px-8 md:py-48 py-8">
      <div className="flex border-white w-full md:w-full p-4"> 
        <div className="flex Dish1 items-center m-2 rounded-2xl">

        </div>
        <div className="flex w-full flex-col items-center justify-center mx-2 ">
          <div className="flex Dish2 h-1/2 items-center m-2 rounded-2xl">

          </div>
          <div className="flex Dish3 h-1/2 items-center m-2 rounded-2xl">

          </div>
        </div>
        
      </div>
      <P1 
      head="read"
      title="Our menu"
      bio="'best foods on a national level'"
      desc="Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience."
      btntitle="View Menu"
      />

    </div>
    </>
  )
}

export default Menusec ;