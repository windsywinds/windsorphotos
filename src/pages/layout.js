import Navbar from './navbar';
import Footer from './footer';
import React, { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= prevScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <nav
        className={`sticky fixed top-0 md:pb-1 bg-white pb-2 z-30 tracking-wider shadow-md shadow-slate-300 rounded-b-xl ${
          isVisible ? 'opacity-100 transition-opacity duration-800' : 'opacity-0 transition-opacity duration-500'
        } transition-opacity`}
      >
        <Navbar />
      </nav>
      <div className="flex flex-grow justify-center items-center ">
        <main className="flex w-[90%] z-10 pt-4 justify-center items-center">
          {children}
        </main>
      </div>
      <div className="flex justify-center items-end z-30">
        <Footer />
      </div>
    </div>
  );
}
