import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler= (e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium' style={{color: '#45413E'}}>Subscribe Now & get 20% off</p>
        <p style={{color: '#8B8680'}} className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, autem.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 transition-all duration-600' style={{borderColor: '#E8DFD5'}}>
            <input className='w-full sm:flex-1 outline-none' style={{backgroundColor: '#FDF9F3', color: '#45413E'}} type="email" placeholder='Enter Your Email' required />
                <button  type='submit' className='text-white text-xs px-10 py-5 transition-all duration-600 hover:opacity-80' style={{backgroundColor: '#9C9B7A'}}>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox