import React from 'react'
import Logo from './Logo'
import NavBarLinks from './NavBarLinks'



const NavBar:React.FC = () => {
  return (
    <div className='flex justify-between pl-32 py-6 items-center'>
      <Logo/>
      <NavBarLinks/>
    </div>
  )
}

export default NavBar
