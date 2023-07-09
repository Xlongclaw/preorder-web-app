import React from 'react'
import Logo from './Logo'
import NavBarLinks from './NavBarLinks'



const NavBar:React.FC = () => {
  return (
    <div className='flex justify-between pl-32 py-10 items-center absolute z-20 w-full'>
      <Logo/>
      <NavBarLinks/>
    </div>
  )
}

export default NavBar
