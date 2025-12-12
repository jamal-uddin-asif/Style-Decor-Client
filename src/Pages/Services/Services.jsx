import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner";
import ServiceCard from "./ServiceCard";
import { useForm } from "react-hook-form";
import { Select } from "@headlessui/react";
import clsx from "clsx";

const Services = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  // const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosSecure(`/services?search=${searchText}&category=${category}`).then(
      (data) => {
        setServices(data.data);
        setLoading(false)
      } 
    );
  }, [axiosSecure, searchText, category]);

  const handleSearch = (data) => {
    if (data.search) {
      setSearchText(data.search);
    } else {
      setSearchText("");
    }
  };
console.log(services)

  const handleSort = (sort) =>{
    if(sort === 'low-high'){
      const sorted = [...services].sort((a, b)=> a.cost - b.cost)
      setServices(sorted)
    }
    if(sort === 'high-low'){
      const sorted = [...services].sort((a, b)=> b.cost - a.cost)
      setServices(sorted)
    }
  }


  if(loading)return <LoadingSpinner></LoadingSpinner>

  return (
    <Container>
      <div className="">
        <div className="flex p-2 justify-center items-center min-h-20 bg-secondary">
          <div className=" h-full md:flex items-center gap-4">
            <label className="label">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="select outline-0"
              >
                <option value="Home">Home</option>
                <option value="Wedding">Wedding</option>
                <option value="Office">Office</option>
                <option value="Seminar">Seminar</option>
                <option value="Meeting">Meeting</option>
              </select>
            </label>

            <label className="label">
              <select
                onChange={(e) => handleSort(e.target.value)}
                className="select outline-0"
              >
                <option value="low-high">Low to high</option>
                <option value="high-low">High to Low</option>
              </select>
            </label>

            <form onSubmit={handleSubmit(handleSearch)} className="relative">
              <input
                {...register("search")}
                className="input md:min-w-80 outline-0"
                type="search"
                placeholder="Search Service"
              />
              <input
                className="absolute right-0 h-full p-2 z-10 bg-amber-400 btn-outline"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
          {services.map((service, i) => (
            <ServiceCard service={service} key={i}></ServiceCard>
          ))}
        </div>

      </div>
    </Container>
  );
};

export default Services;
