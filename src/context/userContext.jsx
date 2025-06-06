import React,{useState} from 'react'

export const UserDataContext = React.createContext()

const userContext = ({children}) => {
  const [isLodding,setIsLodding] = useState(false)
  const [isError,setIsError] = useState(false)
    const [user, setUser] = useState({
        fullname:{
            firstname:"",
            lastname:"",
        },
        email:"",
        password:"",
    })


  

  return (
    <div>
        <UserDataContext.Provider value={{user,setUser}}>
           {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext
