import React from 'react'
import Links from '../constants/NavBarLinks'
import { NavLink } from 'react-router-dom'
import {FiSearch,FiShoppingCart} from "react-icons/fi"


const NavBarLinks:React.FC = () => {
  return (
    <div className='flex font-semibold items-center gap-10'>
      {
        Links.map((link)=>
          <NavLink key={link.title} to={link.link}>{link.title}</NavLink>)
      }
      <FiSearch size={24}/>
      <FiShoppingCart className='mx-9' size={28}/>
    </div>
  )
}

export default NavBarLinks
