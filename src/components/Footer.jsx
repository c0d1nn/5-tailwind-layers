import React from 'react'
import layer3 from '../assets/l3.svg'

const Footer = () => {
  return (
    <div className='relative h-[120px] md:h-[300px]'>
      <img src={layer3} className='z-20 absolute bottom-0 w-full object-bottom object-cover' 
            alt="layer1"/>
    </div>
  )
}

export default Footer