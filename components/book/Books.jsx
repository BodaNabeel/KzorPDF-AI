import React from 'react'

function BooksPage() {
  return (
    <div className='flex flex-col lg:flex-row gap-5 flex-wrap'>
    
        <div className='border-4 flex flex-col  w-[80%] lg:w-[33%] h-80'>
            <div className='bg-gradient-to-r from-[#e2e6f3] to-[#e9e1fa]   flex flex-col justify-center items-center h-[80%]'>

            <h1 className='font-bold text-2xl'>Think & Grow Rich</h1>
            <p className='text-gray-500 font-se'>By: Nepolean Hills</p>
            </div>
            <div className='flex w-[100%] mx-auto h-[20%] justify-around'>
                <button>Open</button>
                <button>Delete</button>
            </div>
        </div>
        <div className='border-4 flex flex-col  w-[80%] lg:w-[33%] h-80'>
            <div className='bg-gradient-to-r from-[#e2e6f3] to-[#e9e1fa]   flex flex-col justify-center items-center h-[80%]'>

            <h1 className='font-bold text-2xl'>Think & Grow Rich</h1>
            <p className='text-gray-500 font-se'>By: Nepolean Hills</p>
            </div>
            <div className='flex w-[100%] mx-auto h-[20%] justify-around'>
                <button>Open</button>
                <button>Delete</button>
            </div>
        </div>
        <div className='border-4 flex flex-col  w-[80%] lg:w-[33%] h-80'>
            <div className='bg-gradient-to-r from-[#e2e6f3] to-[#e9e1fa]   flex flex-col justify-center items-center h-[80%]'>

            <h1 className='font-bold text-2xl'>Think & Grow Rich</h1>
            <p className='text-gray-500 font-se'>By: Nepolean Hills</p>
            </div>
            <div className='flex w-[100%] mx-auto h-[20%] justify-around'>
                <button>Open</button>
                <button>Delete</button>
            </div>
        </div>
       
        </div>
  )
}

export default BooksPage