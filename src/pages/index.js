import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import splash from '../assets/splashlg.jpg';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  return (
    
    <div className="flex items-center flex-col  pt-9">

      <div className="flex w-screen">
      <Image src={splash} alt="splash" layout="fill" className='object-cover  pointer-events-none' />
      </div>
      
      <div className="flex flex-wrap gap-7 w-[90%] justify-center pb-12 ">
      <Link href='/components/gallery'>
      <button className="text-center inline-block px-4 py-2 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-700 to-slate-600 drop-shadow-md hover:stroke-white ">
      Explore Gallery
    </button>
    </Link>
    <Link href='/components/prints'>
    <button className="text-center inline-block px-6 py-2 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-700 to-slate-600 drop-shadow-md hover:stroke-white">
      Explore Shop
    </button>
    </Link>

      </div>

      
    </div>
  );
}
