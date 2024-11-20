import React, { createContext ,useState} from 'react'
import { useEffect } from 'react'
import { GetLocalStorage } from '../LocalStorage'


export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
      const {employeeData,adminData}=GetLocalStorage()
      setUserData({employeeData,adminData})
    
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
        
      
    </div>
  )
}

export default AuthProvider
