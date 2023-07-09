import React from 'react'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const HeroSlider:React.FC = () => {
  return (
    <div className='flex relative'>
      <div className='flex justify-center h-[120vh] items-start overflow-hidden w-[45vw]'>
      <img className='' src="images/food-item2.jpg" alt="" />
      </div>
      <div className='w-32'></div>
      <div className=' absolute bottom-0 right-0 flex'>
        <button className='bg-white w-32 h-32 flex justify-center items-center'><FiChevronLeft size={32}/></button>
        <button className='bg-zinc-800 w-32 h-32 flex justify-center items-center'><FiChevronRight size={32} color='#FF4D00'/></button>
      </div>
    </div>
  )
}

export default HeroSlider
