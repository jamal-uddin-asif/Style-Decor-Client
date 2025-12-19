import React from 'react';
import Leaflet from './Leaflet/Leaflet';
import Container from '../../Components/Shared/Container';
import HeroSlider from './HeroSlider/HeroSlider';
import Heading from '../../Components/Shared/Heading';
import TopDecorators from './TopDecorators/TopDecorators';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import DynamicServices from './DynamicServices/DynamicServices';
import LoadingSpinner from '../../Components/Shared/LoadingSpinner';


const Home = () => {
    const axiosSecure = useAxiosSecure()

    const {data: services = [], isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async()=>{
            const res = await axiosSecure('/services')
            return res.data
        }
    })

    // console.log([...services])
    const servicesByCategory = (category) =>{
        const filtered = [...services].filter(service=> service.category === category)
        return [...filtered].slice(0,4)
    }

    // console.log(servicesByCategory('Wedding'))

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div className='bg-base-200 p-2 md:p-0'>

            <HeroSlider></HeroSlider>
            <DynamicServices servicesByCategory={servicesByCategory}></DynamicServices>


            <Heading Heading={"Our Most Popular Decorators"} sub_heading={'Meet the skilled professionals trusted by thousands of clients'}></Heading>
            <TopDecorators></TopDecorators>

            

            <Heading className='mb-15' Heading={"Our services Coverage Area"}></Heading>
           <Leaflet></Leaflet>


        </div>
    );
};

export default Home;