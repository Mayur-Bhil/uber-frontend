import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setwaitForDriver(false)

        }}> <i  className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5 '>Waiting for driver</h3>
        <div className='flex gap-2 justify-between items-center'>
            <div className='flex tracking-tighter items-center'>
                <img className='h-14 w-14 bg-cover rounded-full ' src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                <img className='h-18 w-18 bg-cover rounded-full' src="https://imgs.search.brave.com/D6W9rtW5V6wBy01_4nV3_-bQL1BupTU_-aT6q433o7k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAzLzMwLzA5/LzM2MF9GXzMwMzMw/MDk4Ml9NQ0swRndp/UzBlQ3ZWenZ0QTRB/d0k1MHVsRVFzOW95/TS5qcGc" alt="" />   

            </div>
            <div>
                <h2 className='text-lg font-medium'>Mayur Bhil</h2>
                <h4 className='text-xl font-semibold -mt-2'>SR05 4295</h4>
                <p className='text-sm text-gray-600 -mt-2'>Maruti Suzuki </p>
            </div>
        </div>
        <div className='flex gap-2 flex-col justify-center items-center'>

        <div className='w-full my-5'>
                <div className='flex items-center gap-4 my-2 border-b-[0.7px] border-black'>
                <i className="text-lg ri-map-pin-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A </h3>
                    <p className='text-base text-gray-600'>Kakariya Talv,Ahemedabad</p>
                </div>
                </div>
                <div className='flex items-center gap-4 my-2 border-b-[0.7px] border-black'>
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A </h3>
                        <p className='text-base text-gray-600'>Kakariya Talv,Ahemedabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 my-2  border-black'>
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A </h3>
                        <p className='text-base text-gray-600'>Kakariya Talv,Ahemedabad</p>
                    </div>  
                </div>

            </div>
        </div>
    </div>
  )
}

export default WaitForDriver
