import React from 'react';
import { useRole } from '../../../Hooks/useRole';
import Analytics from '../Analytics/Analytics';
import MyAssignServices from '../MyAssignServices/MyAssignServices';
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner';
import MyBookings from '../MyBookings/MyBookings';

const DashboardHome = () => {

    const {role, roleLoading} = useRole()

    if(roleLoading) return <LoadingSpinner></LoadingSpinner>

    if(role === 'Admin') return <Analytics></Analytics>

    if(role === 'Decorator') return <MyAssignServices></MyAssignServices>

    if(role === "User") return <MyBookings></MyBookings>

};

export default DashboardHome;