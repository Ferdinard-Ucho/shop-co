import React from 'react'
import { HeaderFont } from '@/lib/font'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react'

const reviews = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10 flex flex-col items-center'>
      <div className='flex w-full justify-between items-center'>
        <h2 className={`${HeaderFont.className} text-3xl mb-10 font-bold text-center`}>
          Our Happy Customers
        </h2>

        <div>
          <Button variant="ghost"size="icon">
            <ArrowLeft/>
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowRight/>
          </Button>
        </div>
    </div>
        <div className='mt-15 flex items-center justify-center gap-6 overflow-x-auto'>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div>
    </div>
  );
};

export default reviews

const ReviewCard = ({}) => {
  return (
    <div className='w-[270px] min-h-[150px] p-4 border border-text-muted-foreground rounded-[10px]'>
      <div className='flex items-center justify-start'>
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className='fill-amber-300 stroke-0 size-4'/>
        ))}
      </div>

      <div className='flex items-center justify-start gap-2'>
        <h4 className='font-bold'>Customer Name</h4>
        <Check className='size-4 bg-green-500 p-0.5 rounded-full stroke-white'/>
      </div>
      <p className='text-sm text-muted-foreground mt-2'>
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident incidunt impedit asperiores voluptates sit ut ratione! Illum inventore doloribus explicabo?"
      </p>
    </div>
  );
};
