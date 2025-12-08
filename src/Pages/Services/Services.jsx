import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner";
import ServiceCard from "./ServiceCard";
import { useForm } from "react-hook-form";

const Services = () => {

  const axiosSecure = useAxiosSecure()
  const {register, handleSubmit} = useForm()
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('')
  const [services, setServices] = useState([])

  

    // const {data: services = [], isLoading, refetch} = useQuery({
    //     queryKey: ['services'],
    //     queryFn: async()=>{
    //         const res = await axiosSecure(`/services?search=${searchText}`)
    //         return res.data
    //       }
    //     })

        useEffect(()=>{
           axiosSecure(`/services?search=${searchText}&category=${category}`).then(data=> setServices(data.data))
        },[axiosSecure,searchText, category])
        
        const handleSearch= (data) =>{
          if(data.search){
            setSearchText(data.search)
          }
        }

        console.log(category)

    // if(isLoading){
    //     return <LoadingSpinner></LoadingSpinner>
    // }
  return (
    <Container>
      <div className="">
        {/* left side  */}
        <div className="flex justify-center items-center min-h-20 bg-secondary">
            <div className=" h-full md:flex items-center gap-4">
            <label className="label">
              <select onChange={(e)=>setCategory(e.target.value)} className="select outline-0">
                   <option value="Home">Home</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Office">Office</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Meeting">Meeting</option>
              </select>
            </label>
              <form onSubmit={handleSubmit(handleSearch)} className="relative">
                <input {...register('search')} className="input md:min-w-80 outline-0" type="search" placeholder="Search Service"/>
                <input  className="absolute btn bg-amber-400 btn-outline" type="submit" value="Search" />
              </form>
            </div>
        </div>  
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {
                services.map((service, i)=> <ServiceCard service={service} key={i}></ServiceCard>)
            }
        </div>

        {/* right side  */}
      </div>
    </Container>
  );
};

export default Services;
