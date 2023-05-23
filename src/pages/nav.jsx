import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/sigimage.jpg';

const Nav = () => {
  return (
    <div>
    <nav className='sticky top-0 bg-white pb-2 md:pb-1 shadow-lg shadow-slate-300 rounded-xl '>
      <Navbar />
      </nav>
      <div className='flex w-[90%] md:w-[80%] items-center justify-center ml-[5%] md:ml-[10%] pt-5'>
        
       
        <Outlet />
       
        
      </div>
      <footer>  
      <p className="flex flex-row justify-center text-center opacity-50 pt-8">
				&copy; {new Date().getFullYear()} <a href="https://windsywinds.github.io" target="_blank" className="px-1"> Sam Windsor. All rights reserved.</a> 
			</p>
      </footer>
      
    </div>
  );
};

export default Nav;


export var Navbar = () => {
  return (
    <div className='max-w-[80%] min-h-[30px] ml-3 sm:ml-9 md:ml-[10%] flex items-center justify-between gap-9 lg:gap-0  '>
      
      <div className="pr-0 sm:pr-6 pt-1 md:pr-0 md:pt-0 ">
    <img src={logo} alt='Logo' className='w-auto  min-w-[80px] md:max-h-36' />
    </div>

    <div className="flex md:gap-16 gap-6">
    <NavLink to='/' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Home</NavLink>
    <NavLink to='/gallery' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Gallery</NavLink>
    <NavLink to='/prints' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Prints</NavLink>
    <NavLink to='/contact' className='hover:text-blue-500 duration-500 focus:text-blue-500' activeclassname='active'>Contact</NavLink>
    </div>
  </div>
  )
}