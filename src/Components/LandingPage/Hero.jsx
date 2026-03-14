import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import HeroSlider from "../../Pages/Home/HeroSlider/HeroSlider";
import Container from "../Shared/Container";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bannerImg from './../../assets/BannerImg.jpg'

const Hero = () => {
  return (
    <div
    style={{ backgroundImage: `url(${bannerImg})` }} 
    className="bg-cover bg-center scroll-smooth"
    //  className={`bg-[url(${bannerImg})] h-full bg-center bg-cover`}
    >
         <Container>
        <section className="relative p-2 md:py-15  bg-base py-10   flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="md:text-5xl uppercase text-white text-3xl font-bold  leading-tight">
              Making Your Special <br />
              <span className="text-secondary"> Moments More Beautiful.</span>
            </h1>
            <p className="md:text-lg   text-slate-300 max-w-lg">
              Book services for your office, home, or dream wedding. We bring
              your vision to life with precision and style.
            </p>

            <div className="flex gap-2">
            <button className=" bg-secondary/50 group duration-75 text-white px-8 py-4 rounded-sm font-semibold hover:bg-secondary/70 transition-all">
              <a  className="flex animate-pulse  items-center gap-2" href={"#wedding"}>
                GET START
              </a>
            </button>
            
            <button className="  group duration-75 text-white px-8 py-4 rounded-sm font-semibold  transition-all">
              <Link className="flex items-center gap-2" to={"/services"}>
                Explore Services <span className="group-hover:ml-4 duration-75"><HiOutlineArrowRight /></span>
              </Link>
            </button>
            </div>

          </motion.div>
          <div className="lg:w-1/2 md:h-[400px] w-full mt-12 lg:mt-0">
            <HeroSlider />
          </div>
        </section>
    </Container>
      </div>
  );
};

export default Hero;
