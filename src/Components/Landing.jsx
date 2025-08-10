import React from 'react'
import { Link } from 'react-router-dom'
import herosection from './../images/hero-img.png'
import dancingtori from "./../images/tori/dancing-tori.gif"
export default function Landing() {
  return (
    <>
      <div className='h-[100vh] w-full  flex flex-col  items-center text-[black] font-extrabold  ' style={{ backgroundImage: `url(${herosection})`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }}>
        <div className='text-center h-[100vh] w-full bg-[#00000000] items-center content-center'>
          <div className='h-[55vh]  content-center'>
            <div className='flex justify-center h-1/2'>
              <img src={dancingtori} alt="" className='' />
            </div>
            <h2 className='text-3xl '> عيشها صح.. وخليك دايمًا فوق السحاب</h2>
            <p className='mt-4 text-lg'>  ابتدي المغامرة</p>
            <Link to='/dashboard'><button className='bg-[#110533] w-80 h-12 mt-5 text-white rounded-md text-xl '>ابدأي دلوقتي</button></Link>
            <div className=' gap-2 mt-1 text-center'>
              <span>اصلا عندي حساب؟</span>
              <Link to={'./login'} className='underline text-[#4114bd] text-center'>تسجيل الدخول</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
