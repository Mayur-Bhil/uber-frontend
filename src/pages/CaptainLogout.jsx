import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            alert("Logout successfully")
            localStorage.removeItem("token")                                                                                    
            navigate("/captains/login")
        }else{
            alert("Logout failed")
        }
    })
  return (
    <div>
        <h1 className='text-2xl text-center '>Logout</h1>
        <p className='text-center'>You have been logged out successfully.</p>
        <p className='text-center'>Redirecting to login page...</p>
    </div>
  )
}

export default CaptainLogout
