// src/components/Navbar.jsx
import { FaSignInAlt } from 'react-icons/fa';
import { PiSignInBold } from 'react-icons/pi';
import { SlBookOpen } from 'react-icons/sl';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black shadow-md sticky top-0 z-50 h-14">
      <div className="container mx-auto px-4 py-3 flex  items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">Cipher Pixel</Link>
       <div className='flex gap-200'>
       <div className="space-x-4 py-1 text-[18px]">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold pb-2.5 border-b-4 b-purple-500' : 'text-gray-400'}>Home</NavLink>
          <NavLink to="/embed" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold pb-2.5 border-b-4  b-purple-500' : 'text-gray-400'}>Embed</NavLink>
          <NavLink to="/extract" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold pb-2.5 border-b-4  b-purple-500' : 'text-gray-400'}>Extract</NavLink>
        </div>

        <div className="space-x-4  flex items-center  ">
        <NavLink to="/SignIn" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-400'}>
        <div className=' flex gap-2 items-center justify-center rounded-xl text-amber-50 px-3 py-1 text-center bg-purple-600 w-40 cursor-pointer'> <SlBookOpen/>  Sign Up </div></NavLink>
          <NavLink to="/SignUp" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-400'}><div className='flex gap-2 items-center justify-center rounded-xl text-amber-50 px-3 py-1  text-center bg-purple-500 w-40 cursor-pointer '><PiSignInBold/> Sign In</div></NavLink>
        </div>
       </div>

      </div>
    </nav>
  );
}

export default Navbar;
