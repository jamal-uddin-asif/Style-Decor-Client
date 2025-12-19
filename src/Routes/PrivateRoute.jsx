import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import LoadingSpinner from '../Components/Shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;