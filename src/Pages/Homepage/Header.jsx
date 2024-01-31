import React from 'react'
import LogoBlackIcon from '../../Icons/logoBlackIcon'
import { Link } from 'react-router-dom'
import SearchIcon from './../../Icons/SearchIcon';
import HeartIcon from './../../Icons/HeartIcon';
import UserIcon from './../../Icons/UserIcon';

const Header = () => {
  return (
    <div className='fixed top-0 border border-[#939393] w-[100%] bg-[#D1CECB]'>
      <header className='w-[80%] mx-auto flex items-center justify-between py-2 font-[500] text-black'>
        <div>
            <LogoBlackIcon/>
        </div>
        <div className='font-[500] text-lg text-black flex gap-7 '>
            <Link to="products" >Products</Link>
            <Link to="brand">Brand</Link>
            <Link to="about">About Us</Link>
            <Link to="faq">FAQ</Link>
            <Link to="contact">Contact</Link>
            <Link to="where">Where to buy</Link>
        </div>
        <div className='flex items-center gap-5'>
            <select className='bg-transparent'>
                <option value="EN">EN</option>
                <option value="RU">RU</option>
                <option value="UZ">UZ</option>
            </select>
            <Link><SearchIcon/></Link>
            <Link><HeartIcon/></Link>
            <Link><UserIcon/></Link>
            <h4><strong>Bag 0</strong></h4>
        </div>
      </header>
    </div>
  )
}

export default Header
