import React from 'react'
import { HeaderFont } from '@/lib/font'
import Image from 'next/image'
import cn from 'clsx'

const BrowseStyles = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
      <div className='bg-accent p-10 rounded-sm'>
        <h2 className={`${HeaderFont.className} text-3xl mb-10 font-bold text-center`}>
          Browse by dress style
        </h2>
        <div className='grid md:grid-cols-10 gap-4'>
          <PictureTile url={"/images/image 11.png"} size={'md'}  title="Casual" imgClasses=""/>
          <PictureTile url={"/images/image 13.png"} size={'lg'}  title="Formal" imgClasses="w-[400px] top-0"/>
          <PictureTile url={"/images/image 12.png"} size={'lg'}  title="Party" imgClasses="w-[300px] -top-0"/>
          <PictureTile url={"/images/image 14.png"} size={'md'}  title="Gym" imgClasses="w-[250px] -top-[10%]"/>
        </div>
      </div>
    </div>
  )
}

export default BrowseStyles

const PictureTile = ({url, title, size ="md", imgClasses}: {url: string, title: string, size: "md" | "lg", imgClasses: string} ) => {
  const spanClass = size === 'md' ? 'md:col-span-4' : 'md:col-span-6';
  return (
    <div 
      className={`${spanClass} col-span-10 relative rounded-[10px] overflow-hidden h-[220px] bg-white`}
    >
      <Image
        src={url}
        alt={title}
        width={500}
        height={500}
        className={cn('absolute right-8 bottom-8 w-[250px] h-[250px] object-cover', imgClasses)}
      />
      <p className='font-black absolute top-5 left-8 text-2xl z-10'>{title}</p>
    </div>
  );
};