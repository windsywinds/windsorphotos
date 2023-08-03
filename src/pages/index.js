import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-9">
          
    <p>Welcome, thanks for checking out my site, it's still under construction, so please check back later.</p>
    <p className="pt-5">While I am setting up my web shop, if there are any prints you'd like, you can <Link href='components/contact' className="underline">send me a message here</Link>, <a className="underline" href="https://instagram.com/windsywinds/">or on Instagram @windsywinds</a>, and I'll get back to you with some prices and options!</p>
    
</div>
  )
}
