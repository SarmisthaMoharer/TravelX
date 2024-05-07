import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaInstagram,FaPinterest,FaYoutube,FaTwitter} from 'react-icons/fa'



const Navbar = () => {
const [nav,setNav] = useState(false);
const [logo,setLogo] = useState(false);
const handleNav =() => {
  setNav(!nav);
  setLogo(!logo)
};

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 font-style:italic absolute z-10 text-white'>
      <div >
        <h1 className={logo ? 'hidden' : 'block'}>TravelX.</h1>
      </div>
      <ul className='hidden md:flex space-x-6'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex space-x-4 '>
        <BiSearch size={30}/>
        <BsPerson size={30}/>
      </div>
      <div className='absolute right-4 md:hidden z-10 ' onClick={handleNav}>
        {nav ? <AiOutlineClose className="text-black" size={30}/> : <HiOutlineMenuAlt4  size={30}/>} 
        
      </div>
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4  pt-6 flex flex-col' : 'absolute left-[-100%] '}>
        <ul>
            <h1>TravelX.</h1>
            <li className='border-b border-blue-900'>Home</li>
            <li className='border-b border-blue-900'>Destinations</li>
            <li className='border-b border-blue-900'>Travel</li>
            <li className='border-b border-blue-900'>View</li>
            <li className='border-b border-blue-900'>Book</li>
            <div className='flex flex-col'>
                <button className='my-5'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-4'>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
