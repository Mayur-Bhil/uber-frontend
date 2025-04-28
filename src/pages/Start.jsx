import React from 'react'
import { Link } from 'react-router-dom' 

const Start = () => {
  return (
    <div className='bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1380,w_1104/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png)] bg-cover  h-screen w-full flex justify-between flex-col bg-red-400'>
    <img className='h-11 w-20 pt-5 ml-5' src='https://imgs.search.brave.com/xSouFCjJwA-xBPlyrPOhUefqGqtl9NwZlH7Th1Q7KaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9V/QkVSLkQtZjIzZDRi/MWMucG5nP3Q9MTcy/MDI0NDQ5NA'/> 
      <div className='bg-white py-5 px-5'>
                <h2 className=' text-3xl font-bold'>Go anywhere with Uber</h2>
                <Link to={"/users/login"} className='flex items-center justify-center w-full bg-black text-white py-3 px-5 rounded-4xl mt-2'>Continue</Link>
        </div>
    </div>
  )
}

export default Start
