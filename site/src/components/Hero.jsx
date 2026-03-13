import React from 'react'
// import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-[#E8DFD5] transition-all duration-600'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div style={{color: '#45413E'}}>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px]' style={{backgroundColor: '#9C9B7A'}}></p>
                <p className='font-medium text-sm md:text-base'> OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[2px]' style={{backgroundColor: '#9C9B7A'}}></p>
            </div>
        </div>
        </div>
        {/* HEro Right side */}
        <img className='w-full h-[75vh] sm:w-1/2 transition-all duration-600 hover:opacity-95' src="https://i.pinimg.com/1200x/8b/42/68/8b42683e8035f41161b584cc68ec0855.jpg" alt="" />
    </div>
  )
}

export default Hero