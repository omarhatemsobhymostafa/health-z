import React from 'react';
import Logo from './../images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='px-6 md:px-20 py-1 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center fixed w-full bg-[#250c6a] shadow z-50'>
      <Link to='/'><img src={Logo} className='h-16 md:h-16 rounded-full ' alt="Logo" /></Link>

      <div className="flex gap-3 md:gap-5 flex-row md:flex-row items-center">
        <Link to='/login'>
          <button className='text-[white]'>تسجيل دخول</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-[#110533]  text-white w-28 h-9 rounded-md transition'>إنشاء حساب</button>
        </Link>
      </div>
    </nav>
  );
}
