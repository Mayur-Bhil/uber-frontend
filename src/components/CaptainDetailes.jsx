import React from 'react'

const CaptainDetailes = () => {
  return (
    <div>
        <div className="h-1/2">
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center justify-between  p-5' >
              <img className='h-18 w-18 rounded-full  object-cover' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBtYW58ZW58MHwyfDB8fHww" alt="" />
              <h4 className='ml-2'>Harsh  patel</h4>   
          </div>
          <div className=''>
            <h4>295.20</h4>
            <p className='text-sm p-3 rounded-xl bg-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-4 justify-center gap-8 items-start bg-gray-200 rounded-2xl'>
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

export default CaptainDetailes
