import React from 'react'
import {FiInstagram,FiTwitter,FiFacebook} from "react-icons/fi"

const SocialIcons:React.FC = () => {
  return (
    <div className='flex gap-8'>
    <div className="h-[1px] w-28 mt-5 bg-black"></div>
      <div className='flex gap-8'>
        <FiTwitter size={48} className='border-[1px] border-black p-3 rounded-2xl'/>
        <FiInstagram size={48} className='border-[1px] border-black p-3 rounded-2xl'/>
        <FiFacebook size={48} className='border-[1px] border-black p-3 rounded-2xl'/>
      </div>
    </div>
  )
}

export default SocialIcons
