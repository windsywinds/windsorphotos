import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/sigimage.png'
import { useRouter } from "next/router";


export default function Navbar() {
  const router = useRouter();
  return (
    <div className='w-full min-h-[30px] flex flex-row place-content-between'>
      
      <div className="flex px-2 sm: pl-4 md:pl-8">
      <Link href='../'><Image src={logo} alt='Logo' className='w-auto object-fit min-w-[80px] max-h-28 ' /></Link>
    </div>

    <div className="flex space-x-2 sm:space-x-6 md:space-x-9 items-center sm:pr-2 md:pr-8 font-bold">
    <Link href='../' className={`hover:text-blue-500 ${router.pathname === "/" ? "text-blue-500 focus:text-blue-500" : "focus:text-blue-500"}`}>Home</Link>
    <Link href='/components/gallery' className={`hover:text-blue-500 ${router.pathname.startsWith("/components/gallery") ? "text-blue-500 focus:text-blue-500" : "focus:text-blue-500"}`}>Gallery</Link>
    <Link href='/components/prints' className={`hover:text-blue-500 ${router.pathname.startsWith("/components/prints") ? "text-blue-500 focus:text-blue-500" : "focus:text-blue-500"}`}>Prints</Link>
    <Link href='/components/contact' className={`hover:text-blue-500 ${router.pathname.startsWith("/components/contact") ? "text-blue-500 focus:text-blue-500" : "focus:text-blue-500"}`}>Contact</Link>

    <Link href='/components/prints?store-page=cart' >
    <div className='ec-cart-widget pointer-events-none '>
      <div>
        <script  data-cfasync="true" data-layout="SMALL_ICON_COUNTER" data-show-empty-cart="false" data-show-buy-animation="true"  type="text/javascript" src="https://app.ecwid.com/script.js?86242021&data_platform=code&data_date=2023-08-05" ></script>
        <script type="text/javascript">Ecwid.init();</script>
      </div>
      </div></Link>

    </div>
  </div>
  )
}


