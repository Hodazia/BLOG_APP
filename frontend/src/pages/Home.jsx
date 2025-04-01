import React from 'react'
import Homeposts from '../components/Homeposts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
    <Navbar />
    <div className='px-8 md:px-[200px]'>
      <Homeposts />
      <Homeposts />
      <Homeposts />
      <Homeposts />
    </div>
    <Footer />
    </>
  )
}

export default Home
