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
            const res = await axiosSecure(`/bookings/${user.email}`)
            return res.data
        }
    })
    console.log(bookings)
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Cost</th>
        <th>Feet</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {bookings?.map((booking, i)=>(
      <tr key={i}>
        <th>1</th>
        <td>{booking.serviceName}</td>
        <td>{booking.cost}</td>
        <td>{booking.feet}</td>
        <td></td>
      </tr>

      ))}
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBookings;