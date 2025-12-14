import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const ManageServicesModal = ({isOpen, setIsOpen, service}) => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const axiosSecure = useAxiosSecure()


      const handleEditService = (data) =>{
        console.log(data)
        axiosSecure.patch(`/service/${service._id}`, data)
        .then(data=>{
            console.log(data)
            setIsOpen(false)
        })
      }
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
                <p>Edit Your service</p>
                   <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                >
                  Close it
                </Button>
              </DialogTitle>
              <div className="mt-2 text-sm/6 ">
               
        <div className="card  w-full shrink-0 ">
            <form
            onSubmit={ handleSubmit(handleEditService)}
              className="card-body"
            >
              <fieldset className="fieldset">
                <div className="md:grid gap-2 grid-cols-2">

                <div>
                  <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  defaultValue={service.serviceName}
                  {...register("serviceName", {
                      required: {
                          value: true,
                          message: "Service Name is required",
                        },
                    })}
                  className="input outline-0  ring-blue-900"
                  placeholder="Service Name"
                  />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}

                <label className="label">Cost</label>
                <input
                  type="number"
                  defaultValue={service.cost}
                  {...register("cost", {
                    required: { value: true, message: "Cost is required" },
                  })}
                  className="input outline-0  ring-blue-900"
                  placeholder="Cost"
                />
                {errors.cost && (
                  <p className="text-red-600">{errors.cost.message}</p>
                )}

                <label className="label ">Rating</label>
                <input
                  type="number"
                  defaultValue={service.rating}
                  {...register("rating", {
                    required: { value: true, message: "Rating is required" },
                  })}
                  className="input outline-0  ring-blue-900"
                  placeholder="Rating"
                />
                {errors.rating && (
                  <p className="text-red-600">{errors.rating.message}</p>
                )}

             

                <label className="label">Location</label>
                <input
                  type="text"
                  defaultValue={service?.location}
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location is required",
                    },
                  })}
                  className="input outline-0 "
                  placeholder="Your Location"
                />
                {errors.location && (
                  <p className="text-red-600">{errors.location.message}</p>
                )}

                <label className="label">Category</label>
                <select 
                      defaultValue={service.category}
                  {...register("category", {
                      required: { value: true, message: "Category is required" },
                    })}
                  className="select outline-0  ring-blue-900"
                >
                  <option value="Home">Home</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Office">Office</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Meeting">Meeting</option>
                </select>
                {errors.category && (
                  <p className="text-red-600">{errors.category.message}</p>
                )}
                </fieldset>
              </div>

              <div>
                  <fieldset className="fieldset">
                {/*Short Description  */}
                <label className="label">Short Description</label>
                <textarea
                defaultValue={service.shortDescription}
                  {...register("shortDescription", {
                    required: {
                      value: true,
                      message: "Short Description is required",
                    },
                  })}
                  className="textarea "
                  placeholder="Description"
                  rows={4}
                  ></textarea>
                {errors.shortDescription && (
                  <p className="text-red-600">{errors.shortDescription.message}</p>
                )}

                {/* short Description  */}
                <label className="label">Description</label>
                <textarea
                defaultValue={service?.description}
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                  className="textarea "
                  placeholder="Description"
                  rows={8}
                ></textarea>
                {errors.description && (
                  <p className="text-red-600">{errors.description.message}</p>
                )}
          </fieldset>
                </div>
              </div>
                <button className="btn btn-secondary max-w-sm mt-4">Edit Now</button>
              </fieldset>
            </form>
          </div>

              </div>
              <div className="mt-4">
        
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ManageServicesModal;
