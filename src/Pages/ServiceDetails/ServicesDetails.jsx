import React, { useRef } from "react";
import { useParams } from "react-router";
import Container from "../../Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { IoLocationSharp } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { MdCategory, MdEmail } from "react-icons/md";
import { SiNamemc } from "react-icons/si";
import ServiceModal from "./ServiceModal";

const ServicesDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const serviceRef = useRef(null)

  
  
  const { data: service = {} } = useQuery({
      queryKey: ["service", id],
      queryFn: async () => {
      const res = await axiosSecure(`/services/${id}`);
      return res.data;
    },
  });
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

console.log(service)


const handleBookNow = () =>{
    serviceRef.current.showModal()
}
  return (
    <Container>
      <div className="pt-6 px-3 min-h-screen md:pt-16 md:flex gap-6">
        <div className="flex-2">
            <h1 className="text-3xl md:text-5xl font-bold">{serviceName}</h1>
            <p className="line-clamp-2">{shortDescription}</p>
            <div className="py-3 space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold border-b pb-2 ">Important Information</h2>
                <p className="flex items-center text-xl font-semibold gap-2"><IoLocationSharp size={40}/> {location}</p>
                <p className="flex items-center text-xl font-semibold gap-2"><MdEmail size={40}/> {creatorEmail}</p>
                <p className="flex items-center text-xl font-semibold gap-2"><MdCategory size={40}/> {category}</p>
                <p className="flex items-center text-xl font-semibold gap-2"><FcRating size={40}/> {rating}/5 </p>
                <p className="flex items-center text-xl font-semibold gap-2"><SiNamemc  size={40}/> {creatorName}</p>
                <p className="flex items-center text-3xl font-bold gap-2 ">per feet {cost} $ </p>

            </div>
        </div>
        <div className="flex-3 "> 
            <div className="space-y-3">
                <img className="w-full max-h-[500px]" src={serviceImg} alt="" />
                <h3 className="text-3xl font-bold">Description</h3>
                <p className="font-semibold">{description}</p>
                <button onClick={handleBookNow} className="btn btn-secondary min-w-50">Book Now</button>
            </div>
        </div>

        <ServiceModal serviceRef={serviceRef} service={service}></ServiceModal>
      </div>
    </Container>
  );
};

export default ServicesDetails;
