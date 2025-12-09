import React from "react";
import aboutImg from "../../assets/aboutUs (2).jpg";
import Container from "../../Components/Shared/Container";

const About = () => {
  return (
    <Container>
      <div className="flex md:flex-row flex-col-reverse  gap-10 p-3 justify-between items-center md:py-15 py-6">
        <div className="flex-1 space-y-5">
          <h1 className="md:text-5xl text-4xl font-bold ">About</h1>
          <p className="text-gray-600 hover:text-black font-semibold">
            Welcome to Style Decor, a leading decoration service provider
            dedicated to creating beautiful, inspiring, and meaningful spaces.
            We specialize in home decoration, wedding decoration, event décor,
            office interior styling, and custom theme setups that match your
            lifestyle and vision. Our goal is to deliver high-quality,
            affordable, and professional decoration services that transform any
            space into a stunning experience. At Style Decor, we combine
            creativity, modern design trends, and expert craftsmanship to
            deliver décor that stands out. Our team of experienced decorators
            and designers work closely with clients to understand their needs
            and create personalized decoration solutions. Whether you want
            elegant home décor, stylish wedding stage design, or professional
            event decoration for seminars, meetings, or corporate functions, we
            offer complete end-to-end service with attention to every detail.
            With years of experience in the decoration industry, Style Decor has
            become a trusted name for reliable, on-time, and budget-friendly
            décor services. Through our application, you can easily explore
            decoration ideas, browse categories, view pricing, and book your
            preferred décor package anytime. We focus on delivering seamless
            customer experience backed by quality materials, unique designs, and
            expert setup. Style Decor is committed to making your moments
            special with creative décor that reflects beauty, comfort, and
            style. Whether it’s your home, event, or workspace, we turn your
            vision into a beautifully decorated reality.
          </p>
        </div>
        <div className="flex-1">
          <img src={aboutImg} alt="Office" />
        </div>
      </div>
    </Container>
  );
};

export default About;
