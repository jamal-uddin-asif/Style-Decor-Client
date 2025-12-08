import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';

const MyBookings = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: bookings = [], } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async()=>{
            const res = await axiosSecure()
        }
    })

    return (
        <div>
            My bookings
        </div>
    );
};

export default MyBookings;