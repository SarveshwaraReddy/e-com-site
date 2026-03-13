import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

// Destructuring props to access id, image, name, and price directly
const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext)
    return (
        <Link className='transition-all duration-600 hover:text-[#9C9B7A]' style={{color: '#45413E'}} to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out duration-600' src={image[0]} alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price*4}</p>
        </Link>
    )
}

export default ProductItem