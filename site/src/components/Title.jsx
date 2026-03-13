import React from 'react'

const Title = ({text1 , text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p style={{color: '#8B8680'}}>{text1} <span style={{color: '#45413E'}} className='font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[2px] sm:h-[2px]' style={{backgroundColor: '#9C9B7A'}}></p>
    </div>
  )
}

export default Title