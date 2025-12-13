import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";

import Swal from "sweetalert2";
import Container from "../../../Components/Shared/Container";
import Heading from "../../../Components/Shared/Heading";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [totalBookings, setTotalBookings] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 5;

  useEffect(() => {
    axiosSecure(`/bookings/count?email=${user.email}`).then((data) => {
      setTotalBookings(data.data.length);
      const page = Math.ceil(data.data.length / limit);
      setTotalPage(page);
    }, []);
  }, [totalBookings, axiosSecure, user]);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `/bookings?email=${user.email}&limit=${limit}&skip=${
          currentPage * limit
        }`
      );

      return res.data.bookings;
    },
  });

  const handlePagination = (i) => {
    setCurrentPage(i);
    console.log("inside func", i);
    refetch();
  };
  console.log("outside func", currentPage);

  const handleDelete = (booking) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/booking/${booking._id}`).then((data) => {
          console.log(data.data);
          refetch();
          Swal.fire({
            title: "Your Booking has been Deleted",
            text: "Your Booking has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  const handlePayment = (booking) => {
    const paymentInfo = {
      serviceId: booking._id,
      cost: booking.cost,
      serviceName: booking.serviceName,
      shortDescription: booking.shortDescription,
      customerEmail: booking.customerEmail,
      trackingId: booking.trackingId,
    };
    axiosSecure.post("/create-checkout-session", paymentInfo).then((data) => {
      window.location.assign(data.data.url);
    });
  };

  return (
    <div>
      <Heading
        className={"mb-10"}
        Heading={"Booking & Status Overview"}
        sub_heading={
          "Keep track of your service timelines, details, and confirmations."
        }
      ></Heading>
      <Container>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="shadow-sm ">
                {/* <th>#</th> */}
                <th className="">Service</th>
                <th className="">Cost</th>
                <th>Feet</th>
                <th>Tracking Id</th>
                <th>Service Status</th>
                <th>Pay</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => (
                <tr key={i} className="shadow-sm">
                  {/* <th>{i+1}</th> */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className=" h-15 w-20">
                          <img
                            src={booking.serviceImg}
                            alt={booking.serviceName}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.serviceName}</div>
                      </div>
                    </div>
                  </td>

                  <td>{booking.cost}</td>
                  <td>{booking.feet}</td>
                  <td>{booking.trackingId}</td>
                  <td>{booking.serviceStatus}</td>
                  <td className="">
                    {booking?.paymentStatus === "Paid" ? (
                      <span className="text-green-500">Paid</span>
                    ) : (
                      <button
                        onClick={() => handlePayment(booking)}
                        className="flex badge-success badge items-center text-white gap-1"
                      >
                        <CiCreditCard1 />
                        Pay
                      </button>
                    )}
                  </td>
                  <td className="flex items-center">
                    <button>
                      <MdDriveFileRenameOutline size={30} />
                    </button>
                    <button
                      onClick={() => handleDelete(booking)}
                      className="md:ml-3 ml-1"
                    >
                      <MdCancel size={26} color="red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center py-6 gap-3">
            {[...Array(totalPage).keys()].map((i) => (
              <button
                onClick={() => handlePagination(i)}
                key={i}
                className="btn"
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
