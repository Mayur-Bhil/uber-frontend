import React from "react";
import { Link } from "react-router-dom";

const CaptainRIding = () => {
  return (
    <div className="h-screen w-full ">
            <div className="fixed left-2 top-0 flex items-center justify-between w-screen">
                    <img className='h-20 w-28 pt-5 ' src='https://tse3.mm.bing.net/th?id=OIP.HZ9SuGYUlFQCB5dqiPbU2gHaEe&pid=Api&P=0&h=180'/>    

                <Link to={'/captains/home'} className="absolute h-12 items-center flex justify-center w-12 bg-black rounded-full text-white text-2xl top-5 right-3" >
                    <i class="ri-logout-box-line"></i>  
                </Link>
            </div>
            <div className="h-4/5">
             <img className="w-full h-full object-cover" src="../public/image.png" alt="" />

            </div>
            <div className="h-1/5 p-6 bg-yellow-400 flex justify-between items-center">
                    <h4 className="text-xl font-semibold ">4KM away</h4>
                    <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"> Complete Ride</button>
            </div>
        
        
      </div>
   
  )
}

export default CaptainRIding
