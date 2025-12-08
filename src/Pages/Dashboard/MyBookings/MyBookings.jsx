import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [] , refetch} = useQuery({
    queryKey: ["bookings", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/bookings/${user.email}`);
      return res.data;
    },
  });


  const handleDelete = (booking) =>{
    axiosSecure.delete(`/booking/${booking._id}`)
    .then(data=>{
        console.log(data.data)
        refetch()
        toast.success("Your Booking has been Deleted")
    })
  }

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
              <th>Pay</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={i}>
                <th>1</th>
                <td>{booking.serviceName}</td>
                <td>{booking.cost}</td>
                <td>{booking.feet}</td>
                <td className="badge-success badge">
                  <button className="flex items-center text-white gap-1">
                    <CiCreditCard1 />
                    Pay
                  </button>
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
    </div>
  );
};

export default MyBookings;
