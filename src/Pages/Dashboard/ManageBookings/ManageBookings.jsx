import React from 'react';
import Heading from '../../../Components/Shared/Heading';
import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import Container from '../../../Components/Shared/Container';
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner';

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure()

    const {data: bookings = [], isLoading} = useQuery({
        queryKey: ['bookings'],
        queryFn: async()=>{
            const res =  await axiosSecure('/bookings')
            return res.data
        }
    })
    
    const {data} = useQuery({
        queryKey: ['decorators'],
        queryFn: async()=>{
            const res = await axiosSecure()
        }
    })

    return (
        <div>
            <Heading className={'my-5'} Heading={"Manage User bookings"}></Heading>
            
            <Container>

               <div className="overflow-x-auto py-6">
                    <table className="table table-zebra">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>#</th>
                          <th className="">Service Name</th>
                          <th>Cost</th>
                          <th>Feet</th>
                          <th>Tracking Id</th>
                          <th>Payment Status</th>
                          <th>Service Status</th>
                       
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {isLoading? <LoadingSpinner></LoadingSpinner>: bookings?.map((booking, i) => (
                          <tr key={i} className="">
                            <th>{i+1}</th>
                            <td >{booking.serviceName}</td>
                            <td>{booking.cost}</td>
                            <td>{booking.feet}</td>
                            <td>{booking.trackingId}</td>
                            <td>{booking.paymentStatus === 'Paid'? <span className='text-green-500'>Paid</span> : <span className='text-red-800'>Not Paid</span>}</td>
                            <td>{booking.serviceStatus}</td>
                            <td>
                                {
                                    booking.paymentStatus === 'Paid' &&  <button  className='btn btn-secondary'>Find Decorator</button>
                                }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
            </Container>
        </div>
    );
};

export default ManageBookings;