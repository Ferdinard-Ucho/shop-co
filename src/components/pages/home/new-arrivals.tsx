import { HeaderFont } from '@/lib/font'
import React from 'react'
import Merchandise, { MerchandiseType } from '../shared/merchandise'

const items: MerchandiseType[] = [
    {
      productId: "1",
      imageUrl: 'url("/images/merchandise/image 7 (15).png")',
      productName: "T-shirt with tape details",
      noOfStars: 4,
      currentPrice: 120,
      discountPercentage: ''},
    {
      imageUrl: 'url("/images/merchandise/image 8 (16).png")',
      productId: "2",
      productName: "Skinny fit jeans",
      noOfStars: 3,
      discountPercentage: 20,
      currentPrice: 240
    },
    {
      productId: "3",
      imageUrl: 'url("/images/merchandise/image 9 (7).png")',
      productName: "Checkered Shirt",
      noOfStars: 4,
      currentPrice: 180,
      discountPercentage: ''
    },
    {
      productId: "4",
      imageUrl: 'url("/images/merchandise/image 11.png")',
      productName: "Sleeve striped T-shirt",
      noOfStars: 4,
      currentPrice: 130,
      discountPercentage: 30,
    }
]

const NewArrivals = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
      <h2 className={`${HeaderFont.className} text-3xl font-bold text-center`}>New Arrivals</h2>
     

     <div className='py-10 flex items-center justify-center gap-4'>
      {items.map((item) => (
      <Merchandise
          key={item.productId}
          productId={item.productId}
          imageUrl={item.imageUrl}
          productName={item.productName}
          noOfStars={item.noOfStars}
          currentPrice={item.currentPrice }
          discountPercentage={item.discountPercentage}
      />
      ))}
     </div>
     
      </div>
  )
}

export default NewArrivals