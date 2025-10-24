import React from 'react'
import { Separator } from '@/components/ui/separator'
import Logo from './logo'
import Link from 'next/link'
import Newsletter from './newwsletter'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='bg-accent py-10'>
      <div className='max-w-7xl mx-auto '>
        <div className=''>
        <Newsletter/>
        </div>
        <Separator className='my-3'/>
      <div>
      <div className='flex justify-between items-center gap-4 px-4 flex-col md:flex-row'>
        <div className='flex flex-col'> 
          <Logo/>
          <p className='max-w-sm mt-2 text-sm text-card-foreground/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quas inventore? In consequatur alias odio?
          </p>

          <div className='flex items-center gap-2 mt-4'>
            <Image
          src="/images/socials/facebook.png"
          alt="Facebook"
          width={20}
          height={20}
          />
            <Image
          src="/images/socials/twitter.png"
          alt="Twitter"
          width={20}
          height={20}
          />
            <Image
          src="/images/socials/ig.png"
          alt="Instagram"
          width={20}
          height={20}
          />
            <Image
          src="/images/socials/github.png"
          alt="Github"
          width={20}
          height={20}
          />
        
        </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        <div className='space-y-5'>
          <p className='text-sm font-bold'> 
            Company
            </p>
          <div className='mt-[-12] flex flex-col gap-2'>
            <Link href="/" className='text-sm text-foreground/70'>About</Link>
            <Link href="/" className='text-sm text-foreground/70'>Features</Link>
            <Link href="/" className='text-sm text-foreground/70'>Works</Link>
            <Link href="/" className='text-sm text-foreground/70'>Careers</Link>
            </div>
          </div>
        <div>
          <p className='text-sm font-bold'> 
            Help
            </p>
          <div className='mt-2 flex flex-col gap-2'>
            <Link href="/" className='text-sm text-foreground/70'>Customer Support</Link>
            <Link href="/" className='text-sm text-foreground/70'>Delivery Dtails</Link>
            <Link href="/" className='text-sm text-foreground/70'>Terms & Conditions</Link>
            <Link href="/" className='text-sm text-foreground/70'>Privacy Policy</Link>
            </div>
          </div>
        <div>
          <p className='text-sm font-bold'> 
            FAQ
            </p>
          <div className='mt-2 flex flex-col gap-2'>
            <Link href="/" className='text-sm text-foreground/70'>Account</Link>
            <Link href="/" className='text-sm text-foreground/70'>Manage Deliveries</Link>
            <Link href="/" className='text-sm text-foreground/70'>Orders</Link>
            <Link href="/" className='text-sm text-foreground/70'>Payments</Link>
            </div>
          </div>
        <div>
          <p className='text-sm font-bold'> 
            Resources
            </p>
          <div className='mt-2 flex flex-col gap-2'>
            <Link href="/" className='text-sm text-foreground/70'>Free e-Books</Link>
            <Link href="/" className='text-sm text-foreground/70'>Development Tutorial</Link>
            <Link href="/" className='text-sm text-foreground/70'>How to - Blog</Link>
            <Link href="/" className='text-sm text-foreground/70'>YouTube Playlist</Link>
            </div>
          </div>
      </div>
      </div>
      <Separator className='my-4'/>
      <div>
        <p className='text-sm text-foreground/70 text-center'>©
          Shop.co. 2000-2023, All Rights Reserved</p>
      </div>
      <div className='mt-4 flex gap-2 justify-center'>
      <div className='flex items-center gap-2'>
        <Image
          src="/images/payments/visa.png"
          alt="Visa"
          width={50}
          height={30}
        />
        <Image
          src="/images/payments/mastercard.png"
          alt="Mastercard"
          width={50}
          height={30}
        />
        <Image
          src="/images/payments/paypal.png"
          alt="Paypal"
          width={50}
          height={30}
        />
        <Image
          src="/images/payments/apple-pay.png"
          alt="apple-pay"
          width={50}
          height={30}
        />
        <Image
          src="/images/payments/google-pay.png"
          alt="google-pay"
          width={50}
          height={30}
        />
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default footer