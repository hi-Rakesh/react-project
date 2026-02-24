import React from 'react'

const TrendingSection = () => {
  return (
    <div className='w-full flex flex-col gap-6'>
        <h2 className='text-2xl md:text-2xl font-bold'>Trending Now</h2>
        <div className='w-full'>

            <div className='bg-gray-800 rounded-lg w-50 h-72 '>
                
            <img src="https://picsum.photos/300/450" alt="ff" className='rounded-lg w-full h-full object-cover' />
                <div className='text-9xl   stroke-[#243c5a] absolute z-10 bottom-0 left-[-1.5rem] '>
                    1
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TrendingSection