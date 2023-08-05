import Navbar from './navbar'
import Footer from './footer'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

 
export default function Layout({ children }) {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const quarterHeight = window.innerHeight / 8;
      setIsVisible(scrollPosition < quarterHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" min-h-screen  ">
     
      
      <nav className={`sticky fixed z-30 top-0 md:pb-1 bg-white pb-2  shadow-lg shadow-slate-300 rounded-xl ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity`}
    >
        <Navbar />
      </nav>
      <div className="flex justify-center items-center ">
      <main className="flex w-[90%] z-10 pt-4 justify-center items-center ">
      {children}
      </main>
      </div>
      <div className="flex justify-center items-center z-30">
      <Footer />
      </div>
      
    </div>
  )
}