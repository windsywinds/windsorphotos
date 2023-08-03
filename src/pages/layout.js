import Navbar from './navbar'
import Footer from './footer'
import Link from 'next/link'

 
export default function Layout({ children }) {
  return (
    <div className=" min-h-screen ">
     
      
      <nav className='sticky fixed z-30 top-0 bg-white pb-2 md:pb-1 shadow-lg shadow-slate-300 rounded-xl '>
        <Navbar />
      </nav>
      <div className="flex justify-center items-center ">
      <main className="flex w-[90%] pt-5 justify-center items-center ">
      {children}
      </main>
      </div>
      <Footer />
      
    </div>
  )
}