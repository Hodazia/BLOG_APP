import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
  const user = true;
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
      <h1 className='text-lg md:text-xl font-extrabold '><Link to="/">Blog Market</Link></h1>
      <div className='flex justify-center items-center px-8'>
        <p><BsSearch /></p>
        <input className='outline-none px-3' placeholder = 'search' type='text'/>
      </div>
      <div className='flex items-center justify-center space-x-4 md:space-x-8'>
      {user ? <h3><Link to="/write">write</Link></h3> : <h3><Link to="/login">login</Link></h3> }
      {user ? <h3><Link to="/write">create</Link></h3> : <h3><Link to="/register">register</Link></h3> }
      </div>
    </div>
  )
}

export default Navbar
