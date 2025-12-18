import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { useAuth } from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner';
import TodaysScheduleCard from './TodaysScheduleCard';

const TodaysSchedule = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

  const getFormattedDate =()=>{
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');
  
  // Combine them into the desired YYYY-MM-DD format
  return `${year}-${month}-${day}`;
}
const formattedDate = getFormattedDate()

    const {data: bookings= [], isLoading} = useQuery({
        queryKey: ['assigned services', formattedDate],
        queryFn: async()=>{
            const res = await axiosSecure(`/bookings/decorator-assigned?email=${user.email}&TodaysSchedule=${formattedDate}`)
            return res.data
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
           <div className='grid md:grid-cols-3 gap-4'>
             {
               bookings.length === 0 ? <div className='min-h-screen col-span-full flex justify-center items-center '>No schedule for today</div>: bookings.map(booking=><TodaysScheduleCard booking={booking}></TodaysScheduleCard>)
             }
           </div>
        </div>
    );
};

export default TodaysSchedule;