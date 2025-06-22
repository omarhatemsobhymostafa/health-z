import React from 'react'
import Logo from './../images/logo.png'
import { Link } from 'react-router-dom'
import img from './../images/illust1.png'
export default function Landing() {
  return (
    <>
      <div className='h-[100vh] w-full bg-[rgb(120,216,222)] flex flex-col items-center py-32 px-6'>
            <img src={img} alt=""  className='h-1/2' />
            <h2 className='text-3xl mt-7'>      خليكي مديرة صحتك</h2>
            <p className='mt-4 text-lg'>ابني عاداتك الصحية</p>
            <Link to='/dashboard'><button className='bg-[#0a5d89] w-80 h-12 mt-5 text-white rounded-md text-xl '>ابدأي دلوقتي</button></Link>
            <div className='flex gap-2 mt-1'><span>اصلا عندي حساب؟</span><Link to={'./login'} className='underline text-green-600'>تسجيل الدخول</Link></div>
      </div> 
    </>
  )
}
