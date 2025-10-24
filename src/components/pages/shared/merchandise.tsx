import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

export type MerchandiseType = {
    productId?: string;
    imageUrl: string;
    productName: string;
    noOfStars: number;
    currentPrice: number;
    discountPercentage: number;
}

const Merchandise = ({imageUrl, productName, noOfStars,currentPrice,discountPercentage}:MerchandiseType) => {
  return (
    <div >
        <div
        style={{
        backgroundImage: imageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '220px',
        width: '220px',
        borderRadius: '10px',
    }}> </div>
        
        <div className='mt-2'>
            <p className='font-semibold '> {productName}</p>

        <div className='flex items-center justify-start gap-3 my-1'>
            <div className='flex items-center justify-start'>
                {Array.from({ length: noOfStars }).map((_, index) => (
                    <Star key={index} className='fill-amber-300 stroke-0 size-4'/>
                ))}
            </div>
            <span className='text-xs'>{noOfStars}/5</span>
        </div>
            <div className='mt-1 flex items-center justify-start gap-2'>
               
               {discountPercentage && (
                <p className='text-lg font-black'>
                    ${currentPrice * (1 - discountPercentage / 100)}
                </p>
            )}
                <p className='text-lg font-black line-through text-muted-foreground'> 
                ${currentPrice}
                </p>

            {discountPercentage && (
                <Badge className='bg-destructive/30 text-destructive px-1 py-0 text-[10px'>
                    -{discountPercentage}%
                    </Badge>
                
            )}
            </div>
        </div>
    </div>
  )
}

export default Merchandise