import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/sigimage.jpg'

export default function Navbar() {
  return (
    <div className='max-w-[80%] min-h-[30px] ml-3 sm:ml-9 md:ml-[10%] flex items-center justify-between gap-9 lg:gap-0  '>
      
      <div className="pr-0 sm:pr-6 pt-1 md:pr-0 md:pt-0 ">
      <Image src={logo} alt='Logo' className='w-auto  min-w-[80px] md:max-h-36' />
    </div>

    <div className="flex md:gap-16 gap-6">
    <Link href='../' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Home</Link>
    <Link href='/components/gallery' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Gallery</Link>
    <Link href='/components/prints' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Prints</Link>
    <Link href='/components/contact' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Contact</Link>
    </div>
  </div>
  )
}
