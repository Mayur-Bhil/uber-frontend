import React, { useRef ,useState} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import { Link } from 'react-router-dom'
import CaptainDetailes from '../components/CaptainDetailes'
import RidePopup from '../components/RidePopup'
import ConfirmRIdepanelCaptain from './ConfirmRIdepanelCaptain'

const CaptainsHome = () => {

  const [ridePopPanel,setRidePopPanel] = useState(true)
  const [ConfirmRidePopPanel,setConfirmRidePopPanel] = useState(true)
  const ridePopPanelRef = useRef(null);
  const ConfirmRidePopPanelref = useRef(null);


   useGSAP(function(){
      if(ridePopPanel){
          gsap.to(ridePopPanelRef.current,{
              transform:'translateY(0)'
          })
      }else{
          gsap.to(ridePopPanelRef.current,{
              transform:'translateY(100%)' 
          })
      }
    },[ridePopPanel])
    
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
        <i className="ri-home-9-fill"></i>
      </Link>
    </div> 
    <div className="h-3/5">
            <img className="h-full w-full object-cover "
          src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
          alt="" />
    </div>
    <div className="h-2/5">
      <CaptainDetailes/>
    </div>
      <div ref={ridePopPanelRef} className='fixed z-10 bottom-0 bg-white pt-12 p-5 w-full translate-y-full'>
            <RidePopup setRidePopPanel={setRidePopPanel} />
       </div>

       <div ref={ConfirmRidePopPanelref} className='fixed z-10 bottom-0 bg-white pt-12 p-5 w-full translate-y-full'>
            <ConfirmRIdepanelCaptain setConfirmRidePopPanel={setConfirmRidePopPanel} setRidePopPanel={setRidePopPanel} />
       </div>
    </div>
  )
}

export default CaptainsHome
