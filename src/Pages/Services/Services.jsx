import React from "react";
import Container from "../../Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const axiosSecure = useAxiosSecure()

    const {data: services = [], isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async()=>{
            const res = await axiosSecure('/services')
            return res.data
        }
    })

    console.log(services)

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
  return (
    <Container>
      <div className="">
        {/* left side  */}
        <div className="">

        </div>  
        <div className="grid grid-cols-4 gap-5">
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
