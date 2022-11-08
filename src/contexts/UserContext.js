import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config'


export const authContext = createContext(null);

const UserContext = ({children}) => {
  const auth = getAuth(app)
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const providerLogin = (provider)=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const LogOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, currentAuth=>{
      setUser(currentAuth)
      setLoading(false)
    })

    return ()=>{
      unsubscribe()
    }
  },[auth])

  const userInfo = { user, loading, providerLogin, LogOut }
  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default UserContext