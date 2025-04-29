import React, { useState } from 'react'

export const CaptainDataContext = React.createContext()

const CaptainContext = ({children}) => {
    const [isLodding,setIsLodding] = useState(false)
    const [isError,setIsError] = useState(false)
    const [captain,setcaptain] = useState({
        fullname: {
            firstname:"",
            lastname:"",
        },
        email:"",
        password:"",
        vehicle: {
            color:"",
            plate:"",
            capacity:"",
            vehicleType:"",
        }
    });







  return (
    <div>
       <CaptainDataContext.Provider value={{captain,setcaptain}}>
                {children}
       </CaptainDataContext.Provider>

    </div>
  )
}

export default CaptainContext
