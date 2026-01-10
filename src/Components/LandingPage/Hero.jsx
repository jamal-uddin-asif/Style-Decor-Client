import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import HeroSlider from "../../Pages/Home/HeroSlider/HeroSlider";
import Container from "../Shared/Container";
import { Link } from "react-router";

const Hero = () => {
  return (
    <Container>
    <div>
      <section className="relative p-2 bg-slate-50 py-10   flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Elegant Spaces for{" "}
            <span className="text-secondary">Every Occasion.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            Book services for your office, home, or dream
            wedding. We bring your vision to life with precision and style.
          </p>
          <button className=" bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary/70 transition-all">
          <Link className="flex items-center gap-2" to={'/services'}>
            Explore Services <HiOutlineArrowRight />
          </Link>
          </button>


        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <HeroSlider/>
        </div>
      </section>
    </div>
    </Container>
  );
};

export default Hero;
