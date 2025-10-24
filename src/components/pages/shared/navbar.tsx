import { Button } from '@/components/ui/button'
import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link' 
import React from 'react'
import { Input } from '@/components/ui/input'
import Logo from './logo'


const navbar = () => {
  return (
    <div>
    <div className="w-full bg-foreground text-background">
      {/* SignUpAlert */}
      <div className="flex justify-center items-center">
        <p className="flex-1 text-center">
          Sign up and get 20% off your first order!
          <span className="ml-2">Sign up Now
            <Link href="/"></Link>
          </span>
        </p>

<Button variant="ghost" size="icon">
  <X/>
</Button>
      </div>

    </div>
          {/* NavContainer  */}
      <div className='max-w-7xl mx-auto px-5 py-4 justify-between flex items-center gap-4 px-4'>

        
        <div className='flex justify-between items-center'>
        {/* Menu */}
        <Button className='md:hidden' variant="ghost" size="icon">
          <Menu className='h-6 w-6'/>
          <span className='sr-only'>Menu</span>
        </Button>


        {/* Logo */}
        <Logo/>
        </div>

      <div className='flex justify-center items-center gap-5 md:flex hidden flex-1'>
        {/* NavItems */}
        <div className='flex justify-center items-center gap-5'>
          <Link href="/">Shop</Link>
          <Link href="/">On Sale</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Brands</Link>
        </div>

        {/* Searchbar */}
        <div className="flex items-center gap-none flex-1 ml-auto">
        <Input 
        placeholder="Search for products..." 
        className=" rounded-full border-none bg-accent max-w-[350px] shadow-none" />
        {/* <Button variant="outline" className="rounded-full">Search</Button>  */}
        </div>
      </div>


        {/* UserSection */}
        <div className='flex justify-center items-center'>
          <Button className= 'md:hidden'variant ="ghost" size="icon">
          <Search/>
          </Button>

          <Button variant ="ghost" size="icon">
          <ShoppingCart/>
          </Button>

          <Button variant ="ghost" size="icon">
          <CircleUserRound/>
          </Button>
        </div>
      </div>

    </div>
  )
}

export default navbar