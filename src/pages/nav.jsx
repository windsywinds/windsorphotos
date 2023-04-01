import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/sigimage.jpg';

const Nav = () => {
  return (
    <div>
    <nav className=''>
      <Navbar />
      </nav>
      <div className='flex w-[80%] items-center justify-center ml-[10%]'>
        
        <Outlet />
        
      </div>
      <footer>  
      <p className="flex flex-row justify-center text-center opacity-50 pt-8">
				&copy; {new Date().getFullYear()} Sam Windsor. All rights reserved.
			</p>
      </footer>
      
    </div>
  );
};

export default Nav;


export var Navbar = () => {
  return (
    <div className='max-w-[80%] ml-[10%] flex items-center justify-between '>
      
      <div className="">
    <img src={logo} alt='Logo' className='w-auto max-h-36' />
    </div>

    <div className="flex gap-16">
    <NavLink to='/' className='hover:text-blue-500 duration-500' activeclassname='active'>Home</NavLink>
    <NavLink to='/gallery' className='hover:text-blue-500 duration-500' activeclassname='active'>Gallery</NavLink>
    <NavLink to='/prints' className='hover:text-blue-500 duration-500' activeclassname='active'>Prints</NavLink>
    <NavLink to='/contact' className='hover:text-blue-500 duration-500' activeclassname='active'>Contact</NavLink>
    </div>
  </div>
  )
}