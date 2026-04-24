import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";


export const Header = () => {
  return (
    <>
    <header className='bg-white border-b fixed z-1 top-0 left-0 w-[100%]  border-gray-300 flex justify-between items-center p-2.5'>
        <div className="logo ml-15 lg:ml-26 w-40 min-w-[150px]">
          <img src={logo} alt="" className="w-full h-auto"/>
          </div>
          <input type="checkbox" id='check'/>
                      <label htmlFor="check"><FiMenu className='menu-bar'/><FaXmark className='x-mark'/></label>
        <nav className=' lg:mr-35 lg:h-15 lg:flex lg:justify-center lg:items-center'>
            <ul className='flex gap-12 p-2.5'>
                <li className='font-semibold text-sm'><a href="/#about">ABOUT</a></li>
                <li className='font-semibold text-sm flex items-center'><a className="flex items-center" href="/#services">SERVICES <FaAngleDown className="ml-1 text-base" /></a></li>
                <li className='font-semibold text-sm'><Link to='/portfolio'> PORTFOLIO</Link>
                 </li>
                <li className='font-semibold text-sm'><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
