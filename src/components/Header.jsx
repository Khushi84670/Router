import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'





const Header = () => {
  return (
    <div className='py-7 px-10 bg-blue-500 text-white flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>My Website <input type="text" placeholder="Search..." className='border border-gray-300 rounded-md p-2' /></h2>
        <div className='flex gap-16'>
            <Link className='text-xl' to="/">Home</Link>
            <Link className='text-xl' to="/about">About</Link>
            <Link className='text-xl' to="/contact">Contact</Link>
            <Link className='text-xl' to="/product">Product</Link>
        </div>
      
    </div>
  )
}

export default Header
