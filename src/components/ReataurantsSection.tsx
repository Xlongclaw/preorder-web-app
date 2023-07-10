import React from 'react'
import RestaurantBox from './RestaurantBox'

const ReataurantsSection:React.FC = () => {
  return (
    <div className=' pt-[10rem]'>
      <h1 className='text-3xl font-semibold mb-[2rem] bg-customorange text-white p-4 px-[8rem] w-[30vw]'>Our Restaurants</h1>
      <div className='gap-[3rem] px-[8rem] grid grid-flow-col overflow-x-auto pt-8 pb-8 hidescroll'>
        <RestaurantBox/>
        <RestaurantBox/>
        <RestaurantBox/>
        <RestaurantBox/>
        <RestaurantBox/>
        <RestaurantBox/>
        <RestaurantBox/>
        <RestaurantBox/>
      </div>
    </div>
  )
}

export default ReataurantsSection
