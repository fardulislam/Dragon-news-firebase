import React, { use } from 'react';
import { Authcontext } from './AuthProvaider';
import { Navigate, useLocation } from 'react-router';
import Loadingpages from '../pages/Loadingpages';

const Priviteroute = ({children}) => {
    const {user,loading,}=use(Authcontext)
    const location = useLocation()
    // console.log(location)
    // console.log(user)

    if(loading){
        return <Loadingpages></Loadingpages>
    }
    if(user && user?.email){
        return children ;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
      
    
};

export default Priviteroute;