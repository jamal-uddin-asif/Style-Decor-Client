import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import HeroUsers from "../../Pages/Home/HeroSlider/HeroUsers";
import Container from "../Shared/Container";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bannerImg from "./../../assets/BannerImg.jpg";

const Hero = () => {
  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className="relative py-10 p-2 flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] uppercase tracking-tight"
            >
              Making Your Special <br />
              <span className="text-secondary drop-shadow-md">Moments More Beautiful.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed"
            >
              Book services for your office, home, or dream wedding. We bring
              your vision to life with precision, style, and a touch of magic.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                to="#wedding"
                className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20"
              >
                GET STARTED
              </Link>

              <Link
                to="/services"
                className="group border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Services
                <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Interaction Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <HeroUsers />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;