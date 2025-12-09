import React from 'react';
import Leaflet from './Leaflet/Leaflet';
import Container from '../../Components/Shared/Container';
import HeroSlider from './HeroSlider/HeroSlider';
import Heading from '../../Components/Shared/Heading';
import TopDecorators from './TopDecorators/TopDecorators';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Home = () => {
    return (
        <div className='bg-base-200 p-2 md:p-0'>

            <HeroSlider></HeroSlider>
            <Heading Heading={"Our Most Popular Decorators"} sub_heading={'Meet the skilled professionals trusted by thousands of clients'}></Heading>
            <TopDecorators></TopDecorators>

        


            <Heading className='mb-15' Heading={"Our services Coverage Area"}></Heading>
           <Leaflet></Leaflet>


        </div>
    );
};

export default Home;