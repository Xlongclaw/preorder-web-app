import React from 'react'
import {FiSearch,FiShoppingCart} from "react-icons/fi"

const NavIcons:React.FC = () => {
  return (
    <div className='flex gap-8 cursor-pointer bg-custombrown text-white items-center justify-center px-6 py-3 rounded-full'>
      <FiSearch size={24}/>
      <FiShoppingCart size={24}/>
    </div>
  )
}

export default NavIcons 
