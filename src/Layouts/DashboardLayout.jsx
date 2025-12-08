import React, { useRef } from 'react';
import Container from '../Components/Shared/Container';
import Logo from '../Components/Shared/Logo';
import { Link, Outlet } from 'react-router';
import { IoIosAddCircle } from 'react-icons/io';
import SideLink from '../Components/Shared/SideLink';

const DashboardLayout = () => {

    return (
        <Container>

<div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    

  <nav className='flex justify-between py-8'>
    <div>
        <Logo></Logo>
    </div>
    <div>

    <label  htmlFor="my-drawer-5" className="drawer-button btn ">Open drawer</label>
    </div>
  </nav>

  <main>
    <Outlet></Outlet>
  </main>



  </div> 
  <div  className="drawer-side">
    <label  htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu font-bold  min-h-full w-80 p-4 bg-base-200">
      {/* Sidebar content here */}
      <Logo></Logo>
      <li><SideLink to={'/dashboard/addServices'} address={'Add Services'}></SideLink></li>
      <li><SideLink to={'/dashboard/manageDecorator'} address={'Manage Decorator'}></SideLink></li>
      <li><SideLink to={'/dashboard/myBookings'} address={'My Bookings'}></SideLink></li>
  
    </ul>
  </div>
</div>
   
        </Container>
    );
};

export default DashboardLayout;