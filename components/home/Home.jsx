import React from 'react'
import { TrashIcon } from "@heroicons/react/20/solid";

function HomePage() {
  
  const DUMMY_DATA = [
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 July, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 August, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 July, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 August, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 July, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 August, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 July, 2023"
    },
    {
      title: "PDF: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam veritatis similique aliquid, quos blanditiis doloribus.",
      date: "26 August, 2023"
    },
  ]
  return (
    <div className='lg:my-16'>
      {DUMMY_DATA.map((data,index) => {
        return (
          <div onClick={() => console.log(index)} className='flex py-4 px-7 justify-between bg-white rounded-lg cursor-pointer bg-gradient-to-r from-[#e2e6f3] to-[#e9e1fa] mb-10'>
          <div className='border-2 w-[70%]'>
            <h3 className='font-semibold'>{data.title}
            
            </h3>
          </div>
          <div className='flex gap-10 items-center'>
            <div>
              <p className='font-semibold'>{data.date}</p>
            </div>
            <div>
            <TrashIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-600 transition ease-in-out delay-100 " />
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default HomePage