import React from 'react'
import { Link } from 'react-router-dom'

const CaptainsHome = () => {
  return (
    <div className="h-screen">
  <div className='p-3 fixed'>
      <img 
      className=" w-10 "
      src="https://imgs.search.brave.com/PiLzChZktPfYegm5ohd3F_Z8ZtZFbs0taj14PlBcBB0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvVWJl/ci1Mb2dvLVBORy1J/bWFnZS5wbmc" alt="" />
      <Link
        to={"/home"}
        className="fixed h-10 w-10 bg-black text-white flex right-2 top-2 font-medium cursor-pointer items-center justify-center bg-center rounded-full "
        >
        <i class="ri-home-9-fill"></i>
      </Link>
    </div> 
    <div className="h-1/2">
            <img className="h-full w-full object-cover "
          src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
          alt="" />
    </div>
      <div className="h-1/2">
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center justify-between  p-5' >
              <img className='h-18 w-18 rounded-full  object-cover' src="https://images.unsplash.com/photo-1712847333437-f9386beb83e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" />
              <h4 className='ml-2'>Harsh  patel</h4>   
          </div>
          <div className=''>
            <h4>295.20</h4>
            <p className='text-sm p-3 rounded-xl bg-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex justify-center gap-4 items-start bg-gray-300 rounded-2xl'>
            <div className='text-cenetr'>
                <i className="text-2xl font-thin  ri-timer-flash-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours Online</p>
            </div>
            <div className='text-cenetr'>
                <i className="text-2xl font-thin  ri-speed-up-fill"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours Online</p>
            </div>
            <div className='text-cenetr'>
                <i className="text-2xl font-thin ri-booklet-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours Online</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CaptainsHome
