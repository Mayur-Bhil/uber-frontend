import React, { useRef,useState } from 'react';
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehicalPanel from '../components/VehicalPanel';
import ConferrmedRide from '../components/ConferrmedRide';

const Home = () => {
const [pickup, setPickup] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen, setPanelOpen] = useState(false)
const panelRef = useRef(false)
const closePanelRef = useRef(false)
const [vehiclepanel,setvehiclepanel] = useState(false)
const vehiclepanelref =  useRef(false)
const [confermRidePanel,setconfermRidePanel] = useState(false);
const confermRidePanelref = useRef(false);

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

  useGSAP(function(){
    if(confermRidePanel){
        gsap.to(confermRidePanelref.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(confermRidePanelref.current,{
            transform:'translateY(100%)'
        })
    }
  },[confermRidePanel])

  useGSAP(function(){
    if(vehiclepanel){
        gsap.to(vehiclepanelref.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(vehiclepanelref.current,{
            transform:'translateY(100%)'
        })
    }
  },[vehiclepanel])

  return (
    <div className='relative h-screen'>
            <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/xSouFCjJwA-xBPlyrPOhUefqGqtl9NwZlH7Th1Q7KaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9V/QkVSLkQtZjIzZDRi/MWMucG5nP3Q9MTcy/MDI0NDQ5NA" alt="" />
            <div onClick={()=>{
                setvehiclepanel(false)
            }} className='h-screen w-screen'>
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
                    <form  action="" className='' onSubmit={(e)=>{
                        e.preventDefault()
                        console.log('form submitted')
                    }} >
                        <div className="line absolute h-16 left-8 w-1  top-1/2 bg-black"></div>
                        <input
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
                            <LocationSearchPanel setPanelOpen={setPanelOpen} vehiclepanel={vehiclepanel} setvehiclepanel={setvehiclepanel}/>
                </div>
            </div>
            <div ref={vehiclepanelref} className='fixed z-10 bottom-0 bg-white p-5 w-full translate-y-full'>
                   <VehicalPanel setconfermRidePanel={setconfermRidePanel   } setvehiclepanel={setvehiclepanel}/>
            </div>

            <div ref={confermRidePanelref} className='fixed z-10 bottom-0 bg-white p-5 w-full translate-y-full'>
                   <ConferrmedRide confermRidePanel ={confermRidePanel}/>
            </div>
    </div>  
  )
}

export default Home
