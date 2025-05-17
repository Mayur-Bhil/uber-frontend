import React from 'react'

const RidePopup = (props) => {
  return (
     <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setRidePopPanel(false)

        }}> <i  className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font- p-2 semibold '>New Ride Awilable</h3>
        <div className='flex items-center justify-between bg-violet-200 p-2 rounded-xl'>
            <div className='flex justify-betwee gap-5 items-center '>
                <img className="h-18 w-18 rounded-full  object-cover" alt="" src="https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"/>
                <h1 className='text-xl font-medium'>Harshita Patel</h1>
            </div>
            <h5 className='text-xl font-medium text-zinc-400'>2.2 KM</h5>
        </div>
        <div className='flex gap-2 flex-col justify-center items-center'>

        <div className='w-full my-5'>
                <div className='flex items-center gap-4 my-2 border-b-[0.7px] border-black'>
                <i className="text-lg ri-shield-user-fill"></i>
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
                <div className='flex items-center gap-4 my-2 border-b-[0.7px] border-black'>
                    <i className="text-lg ri-wallet-3-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>193.25 </h3>
                        <p className='text-base text-gray-600'>cash cash</p>
                    </div>  
                </div>

        </div>
        <button onClick={()=>{
           
        }} className='w-full bg-green-500 rounded-xl  p-2 font-semibold text-white '>Conferm !</button>

        <button onClick={()=>{
            props.setRidePopPanel(false)
        }} className='w-full bg-orange-200 rounded-xl p-2  font-semibold text-pink-400 '>ignore !</button>
        </div>
    </div>
  )
}

export default RidePopup
