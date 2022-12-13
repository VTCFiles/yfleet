import React from 'react'
import heading from '../assets/images/main/heading.png'

const Text = ({text}) => {
  return (
    <div className='relative w-max'>
        <span>
            <img src={heading} alt="heading" className='w-[15rem] h-[4rem] absolute -bottom-8 z-0' />
        </span>
        <span className='z-10'>{text}</span>
    </div>
  )
}

export default Text