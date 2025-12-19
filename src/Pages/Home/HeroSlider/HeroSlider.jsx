import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useAxiosInstance } from "../../../Hooks/useAxiosInstance";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Container from "../../../Components/Shared/Container";

const HeroSlider = () => {
  const axiosInstance = useAxiosInstance();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosInstance("/hero-services").then((data) => {
      setServices(data.data);
    });
  }, [axiosInstance]);
  return (
    <Container>

    <div className=" py-10 md:mb-5">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {services?.map((service, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-black">
              <img
                className="md:h-[400px] h-[200px] w-full opacity-60"
                src={service.serviceImg}
                alt=""
              />
              <div className="absolute text-center text-white  inset-0 flex justify-center items-center">
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-3"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl   font-bold">
                    {service.serviceName}
                  </h1>
                  {/* <p className="text-xl">{service.shortDescription}</p> */}
                  <Link
                    to={`/services/${service._id}`}
                    className="btn btn-active hover:bg-secondary min-w-50"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </Container>
  );
};

export default HeroSlider;
