import React from 'react'
import Import from './Import'
import Recent from './Recent'

function HomePage() {
  return (
    <>
      <div className='mb-5'>
        <h1 className='font-bold'>Welcome, Nabeel</h1>
      </div>
      <Import/>
      <Recent/>
    </>
  )
}

export default HomePage