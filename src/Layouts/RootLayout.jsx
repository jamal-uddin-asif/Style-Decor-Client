import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';
import Navber from '../Components/Shared/Navber';

const RootLayout = () => {
    return (
        <div className='relative  bg-base-200'>
            <header className='sticky top-2  mx-auto  z-30'>
            <Navber></Navber>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;