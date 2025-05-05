import React from 'react'

const VehicalPanel = (props) => {
  return (
    <div>
             <h5 onClick={()=>{
                        props.setvehiclepanel(false)  
                    }} className='p-3 w-14 text-center text-2xl text-white rounded-full absolute top-1 right-3 bg-black'>
                        <i  className="ri-arrow-down-wide-line"></i>
                        
                    </h5>
                            <h3>Choose a vehicle</h3>  
                          <div onClick={()=>{
                                props.setconfermRidePanel(true)
                          }} className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                               <img className='h-10' src="https://imgs.search.brave.com/D6W9rtW5V6wBy01_4nV3_-bQL1BupTU_-aT6q433o7k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAzLzMwLzA5/LzM2MF9GXzMwMzMw/MDk4Ml9NQ0swRndp/UzBlQ3ZWenZ0QTRB/d0k1MHVsRVFzOW95/TS5qcGc" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Uber Go <span><i className="ri-user-fill"></i>4</span> </h4>
                                    <h5>2 mins away</h5>
                                    <p>Affordable , compact rides</p>
                                </div>
                                <h2>₹193.25</h2>
                          </div>
                          
                          <div onClick={()=>{
                                props.setconfermRidePanel(true)
                          }} className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-19' src="https://imgs.search.brave.com/QgoNbDfnw1x5-0_kclWzedZ5msF0vLyn6seX15apNfg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzUzLzkyLzUz/LzM2MF9GXzEwNTM5/MjUzNTRfcTlGSllX/Z2xQMUtoY3ZmejRt/VndGOE8xbWVNU0Vq/aW8uanBn" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Moto  <span><i class="ri-user-fill"></i>2</span> </h4>
                                    <h5>2 mins away</h5>
                                    <p>Affordable , compact rides</p>
                                </div>
                                <h2>₹118.25</h2>
                          </div>

                          <div onClick={()=>{
                                props.setconfermRidePanel(true)
                          }} className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-16' src="https://imgs.search.brave.com/AcCjeovTEA08TESBaqgiwt1dxD118VOrawG8w2fq6Yg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUw/NTc3MDgwL3Bob3Rv/L3RoZS1hdXRvcmlj/a3NoYXctaXNvbGF0/ZWQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUxFT1RaMndy/UUVtWGljTHVPd1JQ/Tk5VcXlZV09uT1NH/Wk85cjRKMlRyTEk9" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Uber Go <span><i class="ri-user-fill"></i>3</span> </h4>
                                    <h5>4 mins away</h5>
                                    <p>Affordable Auto ride</p>

                                </div>
                                <h2>₹193.25</h2>
                          </div>
                          <div onClick={()=>{
                                props.setvehiclepanel()
                          }} className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-11 rounded-xl' src="https://imgs.search.brave.com/pum6VIOXW1rFbKEeEww-waTPesys4iCwcevE7T-Y5iA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzA2LzU1LzE4/LzM2MF9GXzEyMDY1/NTE4MTRfcHRNUGhX/bElRbHZnQUxRdk44/QnhTTUx5R1JaMlI5/dTguanBn" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Uber Go <span><i className="ri-user-fill"></i>4</span> </h4>
                                    <h5>3 mins away</h5>
                                    <p>Affordable MoterCar ride</p>
                                </div>
                                <h2>₹45.25</h2>
                          </div>
                          
    </div>
  )
}

export default VehicalPanel
