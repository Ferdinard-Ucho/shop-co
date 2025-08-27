import React from 'react'
import Image from 'next/image'


const brands = () => {
  return (
    <div className='bg-foreground p-5'>
      <div className='max-w-7xl mx-auto flex items-center md:justify-between flex-wrap'>
        <Image
        src='/images/brands/versace.png'
        alt='brands'
        width={100}
        height={100}
        className='h-[20px] w-auto'
        />
        
        <Image
        src='/images/brands/gucci.png'
        alt='brands'
        width={100}
        height={100}
        className='h-[20px] w-auto'
        />

        <Image
        src='/images/brands/calvin.png'
        alt='brands'
        width={100}
        height={100}
        className='h-[20px] w-auto'
        />

        <Image
        src='/images/brands/prada.png'
        alt='brands'
        width={100}
        height={100}
        className='h-[20px] w-auto'
        />

        <Image
        src='/images/brands/zara.png'
        alt='brands'
        width={100}
        height={100}
        className='h-[20px] w-auto'
        />

      </div>

    </div>
  )
}

export default brands