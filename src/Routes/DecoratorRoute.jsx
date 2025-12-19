import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import LoadingSpinner from '../Components/Shared/LoadingSpinner';
import { useRole } from '../Hooks/useRole';
import Forbidden from '../Components/Shared/Forbidden';

const DecoratorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const {role, roleLoading } = useRole()

    if(loading || roleLoading) return <LoadingSpinner></LoadingSpinner> 
    if(role !== 'Decorator') return <Forbidden></Forbidden>


    return (
        <div>
            {children}
        </div>
    );
};

export default DecoratorRoute;