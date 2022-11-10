import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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

  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUser = (user)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, user )
  }

  const logIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const LogOut = ()=>{
    setLoading(true)
    localStorage.removeItem('token')
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentAuth=>{
      setUser(currentAuth)
      setLoading(false)
    })

    return ()=>{
      unsubscribe()
    }
  },[auth])

  const userInfo = { user, loading, providerLogin, createUser, LogOut, updateUser, logIn }
  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default UserContext