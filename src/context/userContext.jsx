import React,{useState} from 'react'

export const UserDataContext = React.createContext()

const userContext = ({children}) => {
    const [user, setUser] = useState({
        fullname:{
            firstName:"",
            lastName:"",
        },
        email:"",
        password:"",
    })
    const [captain, setCaptain] = useState({})

  

  return (
    <div>
        <UserDataContext.Provider value={{user,setUser,captain,setCaptain}}>
           {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext
