import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';
import Navber from '../Components/Shared/Navber';

const RootLayout = () => {
    return (
        <div className='relative'>
            <header className='sticky top-0 z-10'>
            <Navber></Navber>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;