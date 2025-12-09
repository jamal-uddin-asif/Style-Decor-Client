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

  console.log(decorators);

  return (
    <Container>
      <div className="py-10 md:py-40">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper "
        >
          {decorators.map((decorator, i) => (
            <SwiperSlide key={i}>
              <TopDecoratorsCard decorator={decorator}></TopDecoratorsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default TopDecorators;
