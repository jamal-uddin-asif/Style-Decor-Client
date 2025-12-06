import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';
import Navber from '../Components/Shared/Navber';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            Rootlayout
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;