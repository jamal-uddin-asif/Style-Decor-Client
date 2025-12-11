import React from "react";
import Container from "../../../Components/Shared/Container";
import { MdAddHomeWork, MdOutlinePartyMode } from "react-icons/md";
import ServiceCard from "../../Services/ServiceCard";
import { GiOfficeChair } from "react-icons/gi";
import { SiGotomeeting } from "react-icons/si";
import { Link } from "react-router";
import { ImOffice } from "react-icons/im";

const DynamicServices = ({ servicesByCategory }) => {
  return (
    <div>
      <Container>
        <div className="flex text-center justify-center items-center ">
          <div className="my-10">
            <h1 className="text-3xl mb-3 md:text-4xl font-bold">
              Category-Based{" "}
              <span className="text-secondary"> Decoration Solutions</span>
            </h1>
            <p>
              Easily explore services by event type — home, wedding, office,
              seminar, and more.
            </p>
          </div>
        </div>

        {/* Wedding  */}
        <div id="wedding" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
            <MdOutlinePartyMode />
            Weeding Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Wedding")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>
        </div>

        {/* Home  */}
        <div id="home" className="mb-20">
          <h3 className="flex mb-4 items-center gap-2 text-2xl font-semibold">
            <MdAddHomeWork />
            Home Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
            {servicesByCategory("Home")?.map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))}
          </div>
        </div>

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

          <div className="flex justify-center my-10">
            <Link to={'/services'}  className="btn btn-secondary">See All</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DynamicServices;
