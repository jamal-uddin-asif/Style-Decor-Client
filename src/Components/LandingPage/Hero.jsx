import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import HeroSlider from "../../Pages/Home/HeroSlider/HeroSlider";
import Container from "../Shared/Container";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container>
      <div>
        <section className="relative p-2 bg-base py-10   flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="md:text-5xl text-3xl font-bold  leading-tight">
              Making Your Special 
              <span className="text-secondary"> Moments More Beautiful.</span>
            </h1>
            <p className="md:text-lg   text-slate-600 dark:text-base-content max-w-lg">
              Book services for your office, home, or dream wedding. We bring
              your vision to life with precision and style.
            </p>
            <button className=" bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary/70 transition-all">
              <Link className="flex items-center gap-2" to={"/services"}>
                Explore Services <HiOutlineArrowRight />
              </Link>
            </button>
          </motion.div>
          <div className="lg:w-1/2 md:h-[400px] w-full mt-12 lg:mt-0">
            <HeroSlider />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Hero;
