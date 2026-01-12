import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner";
import ServiceCard from "./ServiceCard";
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import { Button } from "@headlessui/react";
import ServicesLoading from "./ServicesLoading";

const Services = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  // for pagination
  const [currentPage, setCuccrenPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const limit = 8;
  console.log(totalPage);

  useEffect(() => {
    axiosSecure(
      `/services?search=${searchText}&category=${category}&limit=${limit}&skip=${
        currentPage * limit
      }`
    ).then((data) => {
      setServices(data.data.result);
      setTotalPage(Math.ceil(data.data.total / limit));
      setLoading(false);
    });
  }, [axiosSecure, searchText, category, currentPage]);

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  
  const handleSearch = (data) => {
    if (data.search) {
      setSearchText(data.search);
    } else {
      setSearchText("");
    }
  };

  const handleSort = (sort) => {
    if (sort === "low-high") {
      const sorted = [...services].sort((a, b) => a.cost - b.cost);
      setServices(sorted);
    }
    if (sort === "high-low") {
      const sorted = [...services].sort((a, b) => b.cost - a.cost);
      setServices(sorted);
    }
  };

  if (loading) return <ServicesLoading/>;

  

  return (
    <Container>
      <div className="min-h-screen">
        <div className="flex py-5  justify-center items-center bg-secondary">
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
                <option value="low-high">Price asc</option>
                <option value="high-low">Price desc</option>
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

        <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3  gap-5">
          {services.length === 0 ? (
            <div className="flex col-span-full text-3xl text-gray-400  h-screen justify-center items-center ">
              Services Not found
            </div>
          ) : (
            services.map((service, i) => (
              <ServiceCard service={service} key={i}></ServiceCard>
            ))
          )}
        </div>

        <div className="flex justify-center flex-wrap gap-4 my-10">
          {currentPage > 0 && (
            <button
              onClick={() => setCuccrenPage((prev) => prev - 1)}
              className="btn btn-secondary"
            >
              Prev
            </button>
          )}
          {[...Array(totalPage).keys()].map((_, i) => (
            <button
              onClick={() => setCuccrenPage(i)}
              key={i}
              className={`btn ${i == currentPage && "bg-secondary text-white"}`}
            >
              {i + 1}
            </button>
          ))}
          {
            currentPage < totalPage -1 &&   <button onClick={()=> setCuccrenPage(prev=> prev +1)} className="btn btn-secondary">Next</button>
          }
        
        </div>
      </div>
    </Container>
  );
};

export default Services;
