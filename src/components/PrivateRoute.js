import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../contexts/UserContext'
import Loader from '../components/spinner/Loader'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation()

    if(loading){
        return <Loader/>
    }

    if(!user){
        setTimeout(()=>{
            alert('please login to enter this page')
        },500)
        return <Navigate to='/login' state={{from:location}} replace />
    }
  return children
}

export default PrivateRoute