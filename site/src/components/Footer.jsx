import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 leading-6' style={{color: '#8B8680'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius soluta ad itaque voluptates, veritatis, quos nostrum odit quod nobis earum perspiciatis excepturi. Iusto dolores aliquam dolor velit.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5' style={{color: '#45413E'}}>COMPANY</p>
          <ul className='flex flex-col gap-1' style={{color: '#8B8680'}}>
            <Link to='/' className='hover:text-[#9C9B7A] transition-all duration-600'><li>Home</li></Link>
            <Link to='/about' className='hover:text-[#9C9B7A] transition-all duration-600'><li>About us</li></Link>
            <li className='hover:text-[#9C9B7A] cursor-pointer transition-all duration-600'>Delivery</li>
            <li className='hover:text-[#9C9B7A] cursor-pointer transition-all duration-600'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5' style={{color: '#45413E'}}>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1' style={{color: '#8B8680'}}>
            <li className='hover:text-[#9C9B7A] cursor-pointer transition-all duration-600'>+91-9821996487</li>
            <li className='hover:text-[#9C9B7A] cursor-pointer transition-all duration-600'>example@gmail.com</li>
            <li className='hover:text-[#9C9B7A] cursor-pointer transition-all duration-600'>Instagram</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-[#E8DFD5]' />
        <p className='py-5 text-sm text-center' style={{color: '#8B8680'}}>Copyright 2024@ NeuWrap - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer

