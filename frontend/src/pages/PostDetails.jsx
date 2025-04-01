import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 md:px-[200px] mt-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-black md:text-3xl'>10 uses of AI in everyday life</h1>
        <div className='flex items-center justify-center space-x-2 '>
            <p><BiEdit /></p>
            <p><MdDelete /></p>
        </div>
      </div> 
      <div className='flex items-center justify-between mt-2 md:mt-4 '>
        <p>@zia23hoda</p>
        <div className="flex space-x-2 text-sm">
        <p>22/2/25</p>
        <p>12:05</p>
        </div>
      </div> 
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEaeovV57e79hf86twNnk8IwJAHJPhcsjVQ&s' alt='' className='w-full mx-auto mt-8 '/>
      <p className='mx-auto mt-8 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className='flex items-center mt-8 space-x-4 font-semibold '>
        <p>Categories:</p>
        <div className='flex justify-center items-center space-x-2'>
            <div className='bg-gray-300 rounded-lg px-3 py-1'>Tech</div>
            <div className='bg-gray-300 rounded-lg px-3 py-1'>AI</div>
        </div>
      </div>
      <div className='flex flex-col mt-4'>
        <h3 className='mt-6 mb-4 font-semibold'>
            Comments:
        </h3>
        <div className='px-2 py-2 bg-gray'>

        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostDetails
