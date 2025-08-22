import { Button } from '@/components/ui/button'
import { HeaderFont } from '@/lib/font'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const hero = () => {
  return (
    <div className='bg-[#F2F1F1]'>
      <div className='max-w-7xl overflow-hidden mx-auto max-md:px-5 py-16 gap-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
      {/* Hero Text */}
        <div>
          <h2 className= {`${HeaderFont.className} font-black text-4xl`}>
              Find clothes <br />that match <br />your style
          </h2>
          <p className='my-4'> 
            Browse through our range of meticulously crafted germents, designed to bring out your 
            individuality and cater to your sense of style
          </p>
          <Button className='max-md:w-full bg-foreground text-background px-6 py-3 rounded-full mt-4 font-semibold hover:bg-accent transition hover:text-foreground'>
            Shop Now
          </Button>
          

          {/* Stats */}
          <div className='mt-10 flex flex-wrap h-14'>
            <div>
              <p className='text-3xl font-black'>200+</p>
              <p className='text-sm'>International brands</p>
            </div>
            <Separator orientation="vertical" className='mx-6' />
            <div>
              <p className='text-3xl font-black'>2,000+</p>
              <p className='text-sm'>High-Quality Products</p>
            </div>
            <Separator orientation="vertical" className='mx-6'/>

            <div>
              <p className='text-3xl font-black'>30,000+</p>
              <p className='text-sm'>Happy Customers</p>

            </div>
          </div>
        </div>


        {/* Hero Image */}
        <div className='relative h-[500px] w-full '>
          <Image
          src="/images/Vector.png"
          alt="Hero Image"
          width={100}
          height={100}
          className="absolute top-[10%] right-5"
          />
          <Image
          src="/images/Vector.png"
          alt="Hero Image"
          width={50}
          height={50}
          className="absolute top-[50%] left-5"
          />
          <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={800}
          height={800}
          className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default hero