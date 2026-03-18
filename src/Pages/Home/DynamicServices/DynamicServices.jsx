import React from "react";
import Container from "../../../Components/Shared/Container";
import { MdAddHomeWork, MdOutlinePartyMode } from "react-icons/md";
import ServiceCard from "../../Services/ServiceCard";
import { GiOfficeChair } from "react-icons/gi";
import { SiGotomeeting } from "react-icons/si";
import { Link } from "react-router";
import { ImOffice } from "react-icons/im";
import { motion } from "framer-motion";

const DynamicServices = ({ servicesByCategory }) => {
  return (
    <div>
      <Container>

        {/* Wedding  */}
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.5}}
        id="wedding" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
            <MdOutlinePartyMode />
            Weeding Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Wedding")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>
        </motion.div>

        {/* Home  */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        id="home" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
            <MdAddHomeWork />
            Home Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Home")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>
        </motion.div>

        {/* meeting  */}
        <div id="meeting" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
            <SiGotomeeting />
            Meeting Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Meeting")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>
        </div>

        {/* Seminar */}
        <div id="seminar" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
          <ImOffice />
            Seminar Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Seminar")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>
        </div>

        {/* Office */}
        <div id="office" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
            <GiOfficeChair />
            Office Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Office")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>

          <div className="flex justify-end my-10">
            <Link to={'/services'}  className=" bg-secondary text-white font-semibold rounded-sm px-6 py-1">See More..</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DynamicServices;
