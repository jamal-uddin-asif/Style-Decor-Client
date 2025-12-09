import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";

import Swal from "sweetalert2";
import Container from "../../../Components/Shared/Container";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [] , refetch} = useQuery({
    queryKey: ["bookings", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/bookings?email=${user.email}`);
      return res.data;
    },
  });


  const handleDelete = (booking) =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor:"#d33" ,
  cancelButtonColor:"#3085d6" ,
  confirmButtonText: "Delete!"
}).then((result) => {
  if (result.isConfirmed) {
      axiosSecure.delete(`/booking/${booking._id}`)
      .then(data=>{
          console.log(data.data)
          refetch()
          Swal.fire({
            title: "Your Booking has been Deleted",
            text: "Your Booking has been deleted.",
            icon: "success"
          });
      })
  }
});

  }

  const handlePayment = booking =>{
  
    const paymentInfo = {
        serviceId: booking._id,
        cost: booking.cost,
        serviceName: booking.serviceName,
        shortDescription: booking.shortDescription,
        customerEmail: booking.customerEmail, 
        trackingId: booking.trackingId
    }
    axiosSecure.post('/create-checkout-session', paymentInfo)
    .then(data=>{
        window.location.assign(data.data.url)

    })
  }

  return (
    
    <div>
      <Container>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="">Service Name</th>
              <th>Cost</th>
              <th>Feet</th>
              <th>Tracking Id</th>
              <th>Service Status</th>
              <th>Pay</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {bookings?.map((booking, i) => (
              <tr key={i} className="">
                <th>{i+1}</th>
                <td >{booking.serviceName}</td>
                <td>{booking.cost}</td>
                <td>{booking.feet}</td>
                <td>{booking.trackingId}</td>
                <td>{booking.serviceStatus}</td>
                <td className="">
                  {
                    booking?.paymentStatus === 'Paid' ? <span className="text-green-500">Paid</span>: 
                  <button onClick={()=>handlePayment(booking)} className="flex badge-success badge items-center text-white gap-1">
                    <CiCreditCard1 />
                    Pay
                  </button>
                    
                  }
                </td>
                <td>
                  <button>
                    <MdDriveFileRenameOutline size={30} />
                  </button>
                  <button onClick={()=>handleDelete(booking)} className="md:ml-3 ml-1">
                    <MdCancel size={26} color="red" />
                  </button>
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

export default MyBookings;
