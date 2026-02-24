import React from 'react'
import Button from '../ui/Button';
import { Languages } from 'lucide-react';

const Navbar = () => {
  return (
   <div className='relative flex z-10  items-center justify-between inset-1 px-30 py-4'>
    <div className='text-2xl font-bold text-red-600'>
      <img src="./src/assets/images/netflix-logo.png" alt="netflix-logo" className='w-40' />
    </div>
    <div  className='flex'>
      <div className='flex items-center gap-2 border border-gray-600 rounded p-2 mr-4 text-sm text-white'>
        <Languages />
      <select name="language" id="language-select" className='bg-transparent focus:outline-none text-white'>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      </div>

      <Button variant="primary" size="md">
        Sign In
      </Button>
    </div>
   </div>
  )
}

export default Navbar