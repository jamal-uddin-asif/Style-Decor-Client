import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../../Components/Shared/Container";
import servicesMan from "../../../assets/serviceMan.jpg";
import { useUplodePhoto } from "../../../Hooks/useUplodePhoto";
import axios from "axios";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";


const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()

  const HandleAddServices = async (data) => {
    const photo = data.photo[0]

    const formData = new FormData()
    formData.append('image', photo)
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API_KEY}`, formData)
   
    const serviceImg = res.data.data.url 
    const rating = Math.ceil(Math.random() * 5) ;
    console.log(rating)
    
    const services = {
        serviceName: data.name,
        serviceImg,
        cost: data.cost,
        category:data.category,
        description: data.description,
        location: data.location,
        createdBy: user.email,
        creatorName: user.displayName,
        createdAt: new Date(),
        rating,
    }

    axiosSecure.post('/services', services)
    .then(data=>{
      console.log(data.data)
    })

  };
  return (
    <div>
      <Container>
        <div className="flex md:flex-row flex-col-reverse  gap-6 justify-center items-center min-h-screen">
          <div>
            {/* <h1 className="text-4xl font-bold text-center text-secondary">Add Your service</h1> */}
            <img className="max-h-[80vh]" src={servicesMan} alt="" />
          </div>

          <div className="card  w-full max-w-sm shrink-0 ">
            <form
              onSubmit={handleSubmit(HandleAddServices)}
              className="card-body"
            >
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  {...register("name", {
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

                <label className="label">Cost</label>
                <input
                  type="number"
                  {...register("cost", {
                    required: { value: true, message: "Cost is required" },
                  })}
                  className="input outline-0 ring-4 ring-blue-900"
                  placeholder="Cost"
                />
                {errors.cost && (
                  <p className="text-red-600">{errors.cost.message}</p>
                )}

                <label className="label">Rating</label>
                <input
                  type="number"
                  {...register("rating", {
                    required: { value: true, message: "Rating is required" },
                  })}
                  className="input outline-0 ring-4 ring-blue-900"
                  placeholder="Rating"
                />
                {errors.rating && (
                  <p className="text-red-600">{errors.rating.message}</p>
                )}

                <label className="label">Photo</label>
                <input
                  type="file"
                  {...register("photo", {
                    required: { value: true, message: "Photo is required" },
                  })}
                  className="input  outline-0 ring-4 ring-blue-900"
                  placeholder="Photo"
                />
                {errors.photo && (
                  <p className="text-red-600">{errors.photo.message}</p>
                )}

                <label className="label">Location</label>
                <input
                  type="text"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location is required",
                    },
                  })}
                  className="input outline-0 ring-4 ring-blue-900"
                  placeholder="Your Location"
                />
                {errors.location && (
                  <p className="text-red-600">{errors.location.message}</p>
                )}

                <label className="label">Category</label>
                <select
                  {...register("category", {
                    required: { value: true, message: "Category is required" },
                  })}
                  className="select outline-0 ring-4 ring-blue-900"
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

                {/* Description  */}
                <label className="label">Description</label>
                <textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                  className="textarea "
                  placeholder="Description"
                  rows={10}
                ></textarea>
                {errors.description && (
                  <p className="text-red-600">{errors.description.message}</p>
                )}

                <button className="btn btn-secondary mt-4">Add Service</button>
              </fieldset>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddServices;
