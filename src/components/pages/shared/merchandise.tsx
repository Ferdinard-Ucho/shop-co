import React from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

interface Merchandise {
    imageUrl: string;
    productName: string;
    noOfStars: number;
    oldPrice: number;
    newPrice: number;
    discountPercentage: number;
}

const Merchandise = ({imageUrl, productName, noOfStars,oldPrice,newPrice,discountPercentage}:Merchandise) => {
  return (
    <div >
        <div
        style={{
        backgroundImage: imageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        width: '200px',
        borderRadius: '10px',
    }}> </div>
        
        <div className='mt-2'>
            <p className='font-semibold '> {productName}</p>

        <div className='flex items-center justify-start gap-3'>
            <div className='flex items-center justify-start'>
                {Array.from({ length: noOfStars }).map((_, index) => (
                    <Star key={index} className='fill-amber-300 stroke-0 size-3'/>
                ))}
            </div>
            <span className='text-xs'>{noOfStars}/5</span>
        </div>
            <div className='mt-1 flex items-center justify-start gap-2'>
               <p className='text-xl font-black'>{newPrice}</p>
                <p className='text-xl font-black line-through text-muted-foreground'> {oldPrice}</p>
                <Badge className='bg-destructive/30 text-destructive'>-{discountPercentage}</Badge>
            </div>
        </div>
    </div>
  )
}

export default Merchandise