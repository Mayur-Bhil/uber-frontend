import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/captainContext'
// import axios from 'axios'


const CaptainProtectedWrapper = ({children}) => {
const [isLodding,setIsLodding] = React.useState(false)
const {captain,setcaptain} = React.useContext(CaptainDataContext)

const navigate = useNavigate()
const token = localStorage.getItem("token")

useEffect(()=>{
    if(!token){
        alert("You are not logged in")
        setIsLodding(true)
        navigate("/captains/login")
    }else{
        setIsLodding(false)
        navigate("/captains/home")
    }
},[token])

// axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    
//     headers:{
//         Authorization: `Bearer ${token}`
//     }
// }).then((responce)=>{
//     if(responce.status === 200){
//         setcaptain(responce.data.captain)
//         setIsLodding(false)
//     }
// }).catch((error)=>{
//     console.log(error);
    
//     setIsLodding(true)
//     localStorage.removeItem("token")
//     navigate("/captains/login")
// })

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

export default CaptainProtectedWrapper
