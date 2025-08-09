import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className='text-center flex flex-col gap-2 justify-center w-full items-center bg-[#250c6a] text-[#110533] h-28'>
            <div className='flex gap-1 text-3xl text-[#110533]'>
                <a href="https://chat.whatsapp.com/HFWOGxiWDIJ6RPkrB85cF2?fbclid=IwY2xjawLDz5BleHRuA2FlbQIxMABicmlkETFrWER0NlVLNkVST25HeVVDAR5oEw1dLYj0PT3635EgXQXG3MMwHx6H-6FC_Ow9LWyBacvicI_11imQsc6t9A_aem_UP9COyNls5x9icdwb6rF8w"  target='_blank'><FaWhatsapp /></a>
                <a href="https://t.me/ZeinabMarouf1?fbclid=IwY2xjawLDzw1leHRuA2FlbQIxMABicmlkETFrWER0NlVLNkVST25HeVVDAR41dKwizc5JygUtaiuptdbvm84FxNTYi92vi8PKESUWpplS1aTHVjySQLtf3w_aem_EzRrR1jDJLeYHsnMoaBztQ" target='_blank'  ><RiTelegramLine /></a>
                <a href="https://www.facebook.com/groups/562877273911059" target='_blank'><PiFacebookLogoBold /></a>
            </div>
            <p>جميع الحقوق محفوظة &copy; زينب معروف 2025</p>
        </footer>
    )
}
<FaHandHoldingHeart />
