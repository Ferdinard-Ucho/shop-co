import { HeaderFont } from '@/lib/font'
import React from 'react'
import Merchandise from '../shared/merchandise'

const NewArrivals = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
      <h2 className={`${HeaderFont.className} text-3xl font-bold text-center`}>New Arrivals</h2>
     

     <div className='py-10 flex items-center justify-start gap-10'>
      <Merchandise 
      imageUrl= 'url("/images/merchandise/image 7 (15).png")'
      productName="Product Name" 
      noOfStars={4} 
      oldPrice={100}
      newPrice={80}
      discountPercentage={20}
      />
      <Merchandise 
      imageUrl= 'url("/images/merchandise/image 11.png")'
      productName="Product Name" 
      noOfStars={5} 
      oldPrice={200}
      newPrice={190}
      discountPercentage={5}
      />
     </div>
     
      </div>
  )
}

export default NewArrivals