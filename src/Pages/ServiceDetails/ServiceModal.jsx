import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ServiceModal = ({ serviceRef, service }) => {
  
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    serviceImg,
    serviceName,

    rating,
    category,
    cost,
    location,
    creatorName,
    creatorEmail,
    description,
    shortDescription,
    _id,
  } = service;

  const handleBooking = (data) => {
    
    const totalAmount = cost * data.feet;
    console.log(data);
    
    const serviceInfo = {
      serviceImg,
      serviceName,
      rating,
      category,
      cost: totalAmount,
      feet: data.feet,
      customerEmail: data.customerEmail,
      customerName: data.customerName,
      customerLocation: data.customerLocation,
      bookingDate: data.bookingDate,

    }

    axiosSecure.post('/booking', serviceInfo)
    .then(res=>{
      console.log(res.data)
      reset()
      serviceRef.current.close()
      toast.success("Booking Success")
    })

  };


 

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      <dialog
        ref={serviceRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Book Now</h3>
          <div className="flex justify-center">
            <div className="card  w-full max-w-sm shrink-0 ">
              <form
                onSubmit={handleSubmit(handleBooking)}
                className="card-body"
              >
                <fieldset className="fieldset">
                  <label className="label">Your Name</label>
                  <input
                    defaultValue={user?.displayName}
                    readOnly
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
                    defaultValue={user?.email}
                    readOnly
                    type="email"
                    {...register("customerEmail", {
                      required: {
                        value: true,
                        message: "Name is required",
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
                    {...register("serviceName", {
                      required: {
                        value: true,
                        message: "Service Name is required",
                      },
                    })}
                    className="input outline-0 ring-4 ring-blue-900"
                    placeholder="Service Name"
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}

                  <label className="label">Your Location</label>
                  <input
                    type="text"
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
                    {...register("bookingDate", {
                      required: { value: true, message: "Cost is required" },
                    })}
                    className="input outline-0 ring-4 ring-blue-900"
                    placeholder="Booking Date"
                  />
                  {errors.cost && (
                    <p className="text-red-600">{errors.cost.message}</p>
                  )}

                  <label className="label">How many feet you want</label>
                  <input
                    type="number"
                    {...register("feet", {
                      required: { value: true, message: "Feet is required" },
                    })}
                    className="input outline-0 ring-4 ring-blue-900"
                    placeholder="Feet"
                  />
                  {errors.feet && (
                    <p className="text-red-600">{errors.feet.message}</p>
                  )}

                  <button className="btn btn-secondary mt-4">Book Now</button>
                </fieldset>
              </form>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceModal;
