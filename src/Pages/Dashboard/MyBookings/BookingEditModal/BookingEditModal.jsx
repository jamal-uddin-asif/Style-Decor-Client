import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const BookingEditModal = ({refetch, isOpen, setIsOpen, clickedBooking }) => {

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
  if (isOpen && clickedBooking?._id) {
    reset({
      customerName: clickedBooking.customerName,
      customerEmail: clickedBooking.customerEmail,
      serviceName: clickedBooking.serviceName,
      customerLocation: clickedBooking.customerLocation,
      bookingDate: clickedBooking.bookingDate,
      feet: clickedBooking.feet,
    });
  }
}, [isOpen, clickedBooking, reset]);


  const axiosSecure = useAxiosSecure()

  const {
    serviceName,
    customerName,
    customerEmail,
    customerLocation,
    feet,
    bookingDate,
    _id,
  } = clickedBooking;

  const handleEditBooking = (data) => {
    console.log(data);
    axiosSecure.patch(`/bookings/${_id}/myBooking`, data)
    .then(data=>{
      console.log(data)
      refetch()
      setIsOpen(false)
      toast.success('Edit successful')
    })
    
  };
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen,reset]);
  return (
    <div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative  z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full shadow-xl max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 flex justify-between font-medium "
              >
                <p>Edit Your Booking</p>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Close it
                </Button>
              </DialogTitle>
              <div className="mt-2 flex justify-center text-sm/6 ">
                <div className="card  w-full max-w-sm shrink-0 ">
                  <form
                    onSubmit={handleSubmit(handleEditBooking)}
                    className="card-body"
                  >
                    <fieldset className="fieldset">
                      <label className="label">Your Name</label>
                      <input
                        defaultValue={customerName}
                    
                        type="name"
                        {...register("customerName", {
                          required: {
                            value: true,
                            message: "Name is required",
                          },
                        })}
                        className="input outline-0 ring-4 ring-blue-900"
                        placeholder="Your Name"
                      />
                      {errors.customerName && (
                        <p className="text-red-600">
                          {errors.customerName.message}
                        </p>
                      )}

                      <label className="label">Your Email</label>
                      <input
                        defaultValue={customerEmail}
                      
                        type="email"
                        {...register("customerEmail", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                        })}
                        className="input outline-0 ring-4 ring-blue-900"
                        placeholder="Your Name"
                      />
                      {errors.customerEmail && (
                        <p className="text-red-600">
                          {errors.customerEmail.message}
                        </p>
                      )}

                      <label className="label">Service Name</label>
                      <input
                        type="name"
                        defaultValue={serviceName}
                        readOnly
                        {...register("serviceName", {
                          required: {
                            value: true,
                            message: "Service Name is required",
                          },
                        })}
                        className="input outline-0 ring-4 ring-blue-900"
                        placeholder="Service Name"
                      />
                      {errors.serviceName && (
                        <p className="text-red-600">
                          {errors.serviceName.message}
                        </p>
                      )}

                      <label className="label">Your Location</label>
                      <input
                        type="text"
                        defaultValue={customerLocation}
                        {...register("customerLocation", {
                          required: {
                            value: true,
                            message: "Location is required",
                          },
                        })}
                        className="input outline-0 ring-4 ring-blue-900"
                        placeholder="Your Location"
                      />
                      {errors.customerLocation && (
                        <p className="text-red-600">
                          {errors.customerLocation.message}
                        </p>
                      )}

                      <label className="label">Booking Date</label>
                      <input
                        type="date"
                        defaultValue={bookingDate}
                        {...register("bookingDate", {
                          required: {
                            value: true,
                            message: "Booking Date is required",
                          },
                        })}
                        className="input outline-0 ring-4 ring-blue-900"
                        placeholder="Booking Date"
                      />
                      {errors.bookingDate && (
                        <p className="text-red-600">
                          {errors.bookingDate.message}
                        </p>
                      )}

                      <label className="label">How many feet you want</label>
                      <input
                        type="number"
                        defaultValue={feet}
                        {...register("feet", {
                          required: {
                            value: true,
                            message: "Feet is required",
                          },
                        })}
                        className="input outline-0 ring-4 ring-blue-900"
                        placeholder="Feet"
                      />
                      {errors.feet && (
                        <p className="text-red-600">{errors.feet.message}</p>
                      )}

                      <button className="btn btn-secondary mt-4">
                        Edit Now
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="mt-4"></div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BookingEditModal;
