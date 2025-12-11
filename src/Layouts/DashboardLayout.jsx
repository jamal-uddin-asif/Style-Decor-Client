import React, { useRef } from 'react';
import Container from '../Components/Shared/Container';
import Logo from '../Components/Shared/Logo';
import { Link, Outlet } from 'react-router';
import { IoIosAddCircle } from 'react-icons/io';
import SideLink from '../Components/Shared/SideLink';
import { TiThMenu } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdMyLocation } from 'react-icons/md';

const DashboardLayout = () => {

    return (

         <div className='md:grid grid-cols-12 gap-3 '>
        <div className='md:col-span-3 bg-secondary/20 col-span-5 shadow p-2 md:p-5 md:min-h-screen'>
          <ul>
             <Logo></Logo>
      <li ><SideLink to={'/dashboard/addServices'} address={'Add Services'}></SideLink></li>
      <li><SideLink to={'/dashboard/manageDecorator'} address={'Manage Decorator'}></SideLink></li>
      <li><SideLink to={'/dashboard/myBookings'} icon={<FaUser />} address={'My Bookings'}></SideLink></li>
      <li><SideLink to={'/dashboard/manageBookings'} icon={<TbBrandBooking />} address={'Manage Bookings'}></SideLink></li>
      <li><SideLink to={'/dashboard/myAssignedServices'} icon={<MdMyLocation />} address={'My Assigned Services'}></SideLink></li>
          </ul>
        </div>
        <div className='md:col-span-9 col-span-6 md:p-10'>
          <Outlet></Outlet>
        </div>
      </div>

// <div className="drawer drawer-end">
//   <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
    

//   <nav className='shadow-2xl sticky top-0 z-10 bg-base-100'>
//     <Container>
//       <div  className='flex justify-between py-5'>

//     <div>
//         <Logo></Logo>
//     </div>
//     <div>
//     <label  htmlFor="my-drawer-5" className="drawer-button  "><span className='text-cyan-600 font-bold'></span><TiThMenu color='' size={30}/></label>
//     </div>
//       </div>
//     </Container>
//   </nav>

//   <main>
//     <Outlet></Outlet>
//   </main>

//   </div> 
//   <div  className="drawer-side">
//     <label  htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
//     <ul className="menu font-bold  min-h-full w-80 p-4 bg-base-200">
   
//       <Logo></Logo>
//       <li ><SideLink to={'/dashboard/addServices'} address={'Add Services'}></SideLink></li>
//       <li><SideLink to={'/dashboard/manageDecorator'} address={'Manage Decorator'}></SideLink></li>
//       <li><SideLink to={'/dashboard/myBookings'} icon={<FaUser />} address={'My Bookings'}></SideLink></li>
//       <li><SideLink to={'/dashboard/manageBookings'} icon={<TbBrandBooking />} address={'Manage Bookings'}></SideLink></li>
//       <li><SideLink to={'/dashboard/myAssignedServices'} icon={<MdMyLocation />} address={'My Assigned Services'}></SideLink></li>
  
//     </ul>
//   </div>
// </div>
   
    );
};

export default DashboardLayout;