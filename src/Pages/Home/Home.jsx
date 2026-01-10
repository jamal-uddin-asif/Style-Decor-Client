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
import SectionTitle from '../../Components/Shared/SectionTitle';
import Hero from '../../Components/LandingPage/Hero';
import Stats from '../../Components/LandingPage/Stats';
import { Process } from '../../Components/LandingPage/HowItWorks';
import { WhyUs } from '../../Components/LandingPage/WhyUs';
import { Portfolio } from '../../Components/LandingPage/Portfolio';

const Home = () => {
    const axiosSecure = useAxiosSecure()

    const {data: services = [], isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async()=>{
            const res = await axiosSecure('/services')
            return res.data.result
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

            <Hero/>

         

            <DynamicServices servicesByCategory={servicesByCategory}></DynamicServices>


            <SectionTitle base={'Our Most Popular'} color={'Decorators'} sub={'Meet the skilled professionals trusted by thousands of clients'}/>
            <TopDecorators></TopDecorators>

            
            <SectionTitle base={'Our services'} color={'Coverage Area'}/>
           <Leaflet></Leaflet>

           <Stats/>

           <Process/>

           <WhyUs/>

           <Portfolio/>

        </div>
    );
};

export default Home;