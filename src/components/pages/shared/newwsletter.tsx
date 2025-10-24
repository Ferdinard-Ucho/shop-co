import React from 'react'
import { HeaderFont } from '@/lib/font'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const newwsletter = () => {
  return (
    <div className='bg-foreground p-5 rounded-[10px] flex justify-between items-center gap-4'>
        <div className={`${HeaderFont.className} text-background text-2xl font-black max-w-[400px]`}>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
        <div className='w-[500px] space-y-2 rounded-full flex flex-col'>
            <Input className='bg-background text-foreground' placeholder='Enter your Email Address'/>
            <Button variant='secondary'>Subscribe</Button>
        </div>
        </div>
  )
}

export default newwsletter