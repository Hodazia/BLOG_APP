import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const user = true;
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
      <h1 className='text-lg md:text-xl font-extrabold '><Link to="/">Blog Market</Link></h1>
      <div className='flex justify-center items-center px-8'>
        <p><BsSearch /></p>
        <input className='outline-none px-3' placeholder = 'search' type='text'/>
      </div>
      <div className='hidden md:flex items-center justify-center space-x-4 md:space-x-8'>
      {user ? <h3><Link to="/write">write</Link></h3> : <h3><Link to="/login">Login</Link></h3> }
      {user ? <h3>Profile</h3> : <h3><Link to="/register">Register</Link></h3> }
      </div>
      <div className='md:hidden text-lg'>
        <p><FaBars /></p>
      </div>
    </div>
  )
}

export default Navbar
