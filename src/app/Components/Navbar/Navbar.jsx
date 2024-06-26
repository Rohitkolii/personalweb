'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from './Navbar.module.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";



const Navbar = () => {
    const [active, setactive] = useState('');
    const [menu, setmenu] = useState(false);
  
    useEffect(()=> {
      if(menu){
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "scroll"
      }
    })
    return (
    <>
    <div className={Styles.topnav}>
        <p> <IoIosMail /> 123@gmail.com</p>
        <p> <FaPhoneVolume /> +91 9999888877</p>
    </div>
    <nav className={Styles.navcontainer}>
        <div className={Styles.logocol}>
            <p><Link href='\'>WM.</Link></p>
        </div>
        <div className={!menu ? Styles.navlinks : Styles.mobnavlinks}>
            <ul>
                <li><Link onClick={()=> setactive('home')} href='/'>Home</Link></li>
                <li><Link onClick={()=> setactive('work')} href='/works'>Work</Link></li>
                <li><Link onClick={()=> setactive('review')} href='about'>About</Link></li>
                <li><Link onClick={()=> setactive('contact')} href='contact'>Contact</Link></li>
                <li><Link href='/'>Button</Link></li>
            </ul>
        </div>

        <div className={Styles.hammenu} onClick={()=> setmenu(!menu)}>
            {
                menu ?
                <IoCloseOutline />
                :
                <CiMenuFries />
            }
        </div>
    </nav>
    </>
  )
}

export default Navbar