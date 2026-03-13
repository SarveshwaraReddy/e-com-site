import React from 'react'
import {assets} from '../assets/assets'
const OurPloicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base' style={{color: '#45413E'}}>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 transition-all duration-600 hover:opacity-80' alt="" />
        <p className='font-semibold '>Easy Exchange Policy </p>
        <p style={{color: '#8B8680'}}>We offer hassle free exchange Policy </p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 transition-all duration-600 hover:opacity-80' alt="" />
        <p className='font-semibold '>7 Days Return Policy </p>
        <p style={{color: '#8B8680'}}>we provide 7 days free return policy </p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5 transition-all duration-600 hover:opacity-80' alt="" />
        <p className='font-semibold '>Best Customer Support </p>
        <p style={{color: '#8B8680'}}>We provide 24/7 customer support </p>
      </div>
    </div>
  )
}

export default OurPloicy