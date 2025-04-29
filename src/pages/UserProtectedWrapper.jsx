import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const UserProtectedWrapper = ({children}) => {
  const [isLodding,setIsLodding] = React.useState(true)
  const {user,setUser} =  useContext(UserDataContext)

const navigate = useNavigate()
const token = localStorage.getItem("token")

useEffect(()=>{
    if(!token){
        alert("You are not logged in")
        // navigate("/users/login")
    }
},[token])

axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
  headers:{
      Authorization: `Bearer ${token}`
  }
}).then((responce)=>{
  if(responce.status === 200){
      setUser(responce.data.user)
      setIsLodding(false)
      navigate("/home")
  }
}).catch((error)=>{
  console.error("API Error:", error);
  setIsLodding(true)
  localStorage.removeItem("token")
  navigate("/users/login")
})

if(isLodding){
  return (
      <div className='flex justify-center items-center h-screen'>
          <h2>Loading ....!</h2>
      </div>
  )
}

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedWrapper
