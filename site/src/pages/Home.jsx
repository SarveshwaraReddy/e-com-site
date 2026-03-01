import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPloicy from '../components/OurPloicy'
import NewsLetterBox from '../components/NewsLetterBox'


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPloicy/>
      <NewsLetterBox/>
   
    </div>
  )
}

export default Home