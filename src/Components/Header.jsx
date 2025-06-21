import React from 'react';
import Logo from './../images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='px-6 md:px-20 py-1 flex flex-col md:flex-row-reverse gap-4 md:gap-0 justify-between items-center fixed w-full bg-white shadow z-50'>
      <Link to='/'><img src={Logo} className='h-12 md:h-16' alt="Logo" /></Link>

      <div className="flex gap-3 md:gap-5 flex-row md:flex-row items-center">
        <Link to='/login'>
          <button className='text-green-700 hover:text-green-900'>تسجيل دخول</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-green-500 text-white w-28 h-9 rounded-md hover:bg-green-600 transition'>إنشاء حساب</button>
        </Link>
      </div>
    </nav>
  );
}
