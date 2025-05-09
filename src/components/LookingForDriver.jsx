import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setvehicalFound(false)

        }}> <i  className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5 '>Looking for driver</h3>
        <div className='flex gap-2 flex-col justify-center items-center'>
        <img className='h-26' src="https://imgs.search.brave.com/D6W9rtW5V6wBy01_4nV3_-bQL1BupTU_-aT6q433o7k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAzLzMwLzA5/LzM2MF9GXzMwMzMw/MDk4Ml9NQ0swRndp/UzBlQ3ZWenZ0QTRB/d0k1MHVsRVFzOW95/TS5qcGc" alt="" />   

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

export default LookingForDriver
