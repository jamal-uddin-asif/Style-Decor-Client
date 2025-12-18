import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";

import Swal from "sweetalert2";
import Container from "../../../Components/Shared/Container";
import Heading from "../../../Components/Shared/Heading";
import { Link } from "react-router";
import { Field, Label, Select } from "@headlessui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import clsx from "clsx";
import BookingEditModal from "./BookingEditModal/BookingEditModal";
const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [isOpen, setIsOpen] = useState(false)
  const [clickedBooking, setClickedBooking] = useState({})

  const [totalBookings, setTotalBookings] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("");

  const limit = 5;

  useEffect(() => {
    axiosSecure(`/bookings/count?email=${user.email}`).then((data) => {
      setTotalBookings(data.data.length);
      const page = Math.ceil(data.data.length / limit);
      setTotalPage(page);
    });
  }, [totalBookings, axiosSecure, user]);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", currentPage, user.email, sort, status],
    queryFn: async () => {
      const res = await axiosSecure(
        `/bookings?email=${user.email}&limit=${limit}&skip=${
          currentPage * limit
        }&sort=${sort}&status=${status}`
      );

      return res.data.bookings;
    },
  });

  const handlePagination = (i) => {
    setCurrentPage(i);
    console.log("inside func", i);
    refetch();
  };

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

  const handleSortStatus = e =>{
    setStatus(e)
    refetch()
  }

  const handelOpenModal = (service) =>{
    setClickedBooking(service)
    setIsOpen(true)
  }

  return (
    <div className="">
      <Heading
        className={"mb-10"}
        Heading={"Booking & Status Overview"}
        sub_heading={
          "Keep track of your service timelines, details, and confirmations."
        }
      ></Heading>
      <Container>
        <div className="shadow bg-secondary/20 mb-10 rounded-2xl py-5 ">
        <div>
          <div className="flex items-center">

            {/* date sorting  */}

            <div className="w-full max-w-[200px] px-4">
              <Field>
                {/* <Description className="text-sm/6 text-white/50">This will be visible to clients on the project.</Description> */}
                <div className="relative">
                  <Select
                    onChange={(e) => setSort(e.target.value)}
                    className={clsx(
                      "mt-3 block w-full appearance-none rounded-lg border-none bg-secondary text-white shadow px-3 py-1.5 text-sm/6 ",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white"
                      // Make the text of each option black on Windows
                    )}
                  >
                    <option value="Newest-first">Newest first</option>
                    <option value="Oldest-first">Oldest first</option>
                  </Select>
                  <IoChevronDownCircleOutline
                    color="white"
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60 "
                    aria-hidden="true"
                  />
                </div>
              </Field>
            </div>

            {/* Status sorting  */}
            <div className="w-full max-w-[250px] px-4">
              <Field>
                {/* <Description className="text-sm/6 text-white/50">This will be visible to clients on the project.</Description> */}
                <div className="relative space-x-2.5">
                  <Select
                    onChange={(e) => handleSortStatus(e.target.value)}
                    className={clsx(
                      "mt-3  block w-full appearance-none rounded-lg border-none bg-secondary text-white shadow px-3 py-1.5 text-sm/6 ",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white"
                      // Make the text of each option black on Windows
                    )}
                  >
                  <option value="Pending">Pending</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Planning Phase">Planning Phase</option>
                  <option value="Materials Prepared">Materials Prepared</option>
                  <option value="On the Way to Venue">On the Way to Venue</option>
                  <option value="Setup in Progress">Setup in Progress</option>
                  <option value="Completed">Completed</option>
                  </Select>
                  <IoChevronDownCircleOutline
                    color="white"
                    className="group  pointer-events-none absolute top-1/2 -translate-y-1/2 right-2.5 size-4 fill-white/60 "
                    aria-hidden="true"
                  />
                </div>
              </Field>
            </div>
            
          </div>
        </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="shadow-sm ">
                {/* <th>#</th> */}
                <th className="">Service</th>
                <th className="">Cost</th>
                <th>Feet</th>
                <th>Booking Date</th>
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
                  <td>{booking.bookingDate}</td>
                  <td>
                    {" "}
                    <Link
                      className="link-hover"
                      to={`/dashboard/trackings/${booking.trackingId}`}
                    >
                      {" "}
                      {booking.trackingId}
                    </Link>{" "}
                  </td>
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
                    <button onClick={()=>handelOpenModal(booking)}>
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
                className={`${
                  i === currentPage ? "btn btn-secondary " : "btn"
                }`}
                onClick={() => handlePagination(i)}
                key={i}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <BookingEditModal refetch={refetch} clickedBooking={clickedBooking} isOpen={isOpen} setIsOpen={setIsOpen}></BookingEditModal>
      </Container>
    </div>
  );
};

export default MyBookings;
