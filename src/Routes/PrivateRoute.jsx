import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import LoadingSpinner from '../Components/Shared/LoadingSpinner';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;