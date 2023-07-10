import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'

const HomePage:React.FC = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <AboutUsSection/>
    </div>
  )
}

export default HomePage
