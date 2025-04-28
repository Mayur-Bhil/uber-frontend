import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const UserProtectedWrapper = ({children}) => {


const navigate = useNavigate()
const token = localStorage.getItem("token")

useEffect(()=>{
    if(!token){
        alert("You are not logged in")
        navigate("/users/login")
    }
},[token])

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedWrapper
