import React from 'react'
import { HeaderFont } from '@/lib/font'
import Link from 'next/link'

const logo = () => {
  return (
        <Link  className={`${HeaderFont.className} text-xl font-black`} href={''}>SHOP.CO</Link>
  )
}

export default logo