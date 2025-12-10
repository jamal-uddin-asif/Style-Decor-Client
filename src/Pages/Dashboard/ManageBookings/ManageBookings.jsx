import React, { useState } from 'react';
import Heading from '../../../Components/Shared/Heading';
import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import Container from '../../../Components/Shared/Container';
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner';
import DecoratorsDialog from './Dialog/DecoratorsDialog';

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false)
    const [clickedBooking, setClickedBooking] = useState({})

    const {data: bookings = [], isLoading: bookingsLoading, refetch: bookingRefetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async()=>{
            const res =  await axiosSecure('/bookings')
            return res.data
        }
    })
    
    const {data: decorators= []} = useQuery({
        queryKey: ['decorators'],
        queryFn: async()=>{
            const res = await axiosSecure('/users?role=Decorator')
            return res.data
        }
    })


    const handleAssignDecorator = (booking) =>{
      setClickedBooking(booking)
        setIsOpen(true)

    }

    if(bookingsLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

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
                        
                        { bookings?.map((booking, i) => (
                          <tr key={i} className="">
                            <th>{i+1}</th>
                            <td >{booking.serviceName}</td>
                            <td>{booking.cost}</td>
                            <td>{booking.feet}</td>
                            <td>{booking.trackingId}</td>
                            <td>{booking.paymentStatus === 'Paid'? <span className='text-green-500'>Paid</span> : <span className='text-red-800'>Not Paid</span>}</td>
                            <td className={booking.serviceStatus === 'Pending'? 'text-yellow-500': 'text-green-500'}>{booking.serviceStatus}</td>
                            <td>
                                {
                                    booking.serviceStatus === 'Pending' ?  <button onClick={()=>handleAssignDecorator(booking)}  className='btn btn-secondary'>Find Decorator</button>: <span className='text-green-500'>Decorator Assigned</span>
                                }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <DecoratorsDialog bookingRefetch={bookingRefetch} decorators={decorators} clickedBooking={clickedBooking} isOpen={isOpen} setIsOpen={setIsOpen}></DecoratorsDialog>
                  </div>
            </Container>
        </div>
    );
};

export default ManageBookings;