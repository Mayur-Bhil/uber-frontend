import React, { useRef,useState } from 'react';
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
const [pickup, setPickup] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen, setPanelOpen] = useState(false)
const panelRef = useRef(false)
const closePanelRef = useRef(false)

  const submitHandler = (e) => {
      e.preventDefault()
  }
  useGSAP(function(){
     if(panelOpen){
        gsap.to(panelRef.current, {
            height: '70%',
            padding:24  
     })
     gsap.to(closePanelRef.current, {
        opacity:1
 })
 
    }
     else{
        gsap.to(panelRef.current,{
          height: '0%',
        })
        gsap.to(closePanelRef.current,{
            opacity:0
        })
     }
  },[panelOpen])

  return (
    <div className='relative h-screen'>
            <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/xSouFCjJwA-xBPlyrPOhUefqGqtl9NwZlH7Th1Q7KaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9V/QkVSLkQtZjIzZDRi/MWMucG5nP3Q9MTcy/MDI0NDQ5NA" alt="" />
            <div className='h-screen w-screen'>
                <img className='h-full w-full cover ' src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png" alt="" />
            </div>
            <div className='top-0 flex flex-col justify-end absolute w-full h-screen rounded-lg'>
                <div className='h-[30%] p-5 bg-white relative'>
                    <h5  onClick={()=>{
                        setPanelOpen(false)
                    }} ref={closePanelRef} className='absolute opacity-0 right-6 text-3xl top-0 rounded-full '>
                    <i  className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-3xl font-semibold mb-5'>Find a trip</h4>
                    <form action="" className='' onSubmit={(e)=>{
                        e.preventDefault()
                        console.log('form submitted')
                    }} >
                        <div className="line absolute h-16 left-8 w-1  top-1/2 bg-black"></div>
                        <input
                        onBlur={()=>{
                            setPanelOpen(false)
                        }}
                        onClick={()=>{
                            setPanelOpen(true)
                        }}
                         value={pickup}
                         onChange={(e) => setPickup(e.target.value)} 
                        className='bg-[#eee] px-12 py-3 text-base rounded-lg w-full mb-3' type="text" placeholder='add a pickup location' />
                        <input
                        onClick={()=>{
                            setPanelOpen(true)
                          }}  
                            value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className='bg-[#eee] px-12 py-3 text-base rounded-lg w-full mb-3' type="text" placeholder='Enetr your Destination' />
                    </form>
                </div>
                <div ref={panelRef} className='h-[0] bg-[#FFFFFF]'>
                            <LocationSearchPanel/>
                </div>
            </div>
            <div className='fixed z-10 bottom-0 bg-white p-5 w-full translate-y-full'>
                          <div className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-10' src="https://imgs.search.brave.com/D6W9rtW5V6wBy01_4nV3_-bQL1BupTU_-aT6q433o7k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAzLzMwLzA5/LzM2MF9GXzMwMzMw/MDk4Ml9NQ0swRndp/UzBlQ3ZWenZ0QTRB/d0k1MHVsRVFzOW95/TS5qcGc" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Uber Go <span><i class="ri-user-fill"></i>4</span> </h4>
                                    <h5>2 mins away</h5>
                                    <p>Affordable , compact rides</p>
                                </div>
                                <h2>₹193.25</h2>
                          </div>
                          
                          <div className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-19' src="https://imgs.search.brave.com/QgoNbDfnw1x5-0_kclWzedZ5msF0vLyn6seX15apNfg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzUzLzkyLzUz/LzM2MF9GXzEwNTM5/MjUzNTRfcTlGSllX/Z2xQMUtoY3ZmejRt/VndGOE8xbWVNU0Vq/aW8uanBn" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Moto  <span><i class="ri-user-fill"></i>2</span> </h4>
                                    <h5>2 mins away</h5>
                                    <p>Affordable , compact rides</p>
                                </div>
                                <h2>₹118.25</h2>
                          </div>

                          <div className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-16' src="https://imgs.search.brave.com/AcCjeovTEA08TESBaqgiwt1dxD118VOrawG8w2fq6Yg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUw/NTc3MDgwL3Bob3Rv/L3RoZS1hdXRvcmlj/a3NoYXctaXNvbGF0/ZWQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUxFT1RaMndy/UUVtWGljTHVPd1JQ/Tk5VcXlZV09uT1NH/Wk85cjRKMlRyTEk9" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Uber Go <span><i class="ri-user-fill"></i>3</span> </h4>
                                    <h5>4 mins away</h5>
                                    <p>Affordable Auto ride</p>

                                </div>
                                <h2>₹193.25</h2>
                          </div>
                          <div className='flex border-2 p-2 border-black my-5 items-center justify-between active:border-sky-300 rounded-xl'>
                                 <img className='h-11 rounded-xl' src="https://imgs.search.brave.com/pum6VIOXW1rFbKEeEww-waTPesys4iCwcevE7T-Y5iA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzA2LzU1LzE4/LzM2MF9GXzEyMDY1/NTE4MTRfcHRNUGhX/bElRbHZnQUxRdk44/QnhTTUx5R1JaMlI5/dTguanBn" alt="" />   
                                <div className='ml-2 mrl-2'>
                                    <h4>Uber Go <span><i class="ri-user-fill"></i>4</span> </h4>
                                    <h5>3 mins away</h5>
                                    <p>Affordable MoterCar ride</p>
                                </div>
                                <h2>₹45.25</h2>
                          </div>
                          
            </div>
    </div>  
  )
}

export default Home
