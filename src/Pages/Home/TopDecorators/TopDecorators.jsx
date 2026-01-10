import React from "react";
import Container from "../../../Components/Shared/Container";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TopDecoratorsCard from "./TopDecoratorsCard";
import { useQuery } from "@tanstack/react-query";
import { useAxiosInstance } from "../../../Hooks/useAxiosInstance";

const TopDecorators = () => {
  const axiosInstance = useAxiosInstance();

  const { data: decorators = [] } = useQuery({
    queryKey: ["decorators"],
    queryFn: async () => {
      const res = await axiosInstance("/users?role=Decorator");
      return res.data;
    },
  });

  return (
    <Container>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-5 md:my-10 lg:my-20'>
        {decorators.map((decorator, i) => (
          <SwiperSlide key={i}>
            <TopDecoratorsCard decorator={decorator}></TopDecoratorsCard>
          </SwiperSlide>
        ))}
      </div>
     
    </Container>
  );
};

export default TopDecorators;
