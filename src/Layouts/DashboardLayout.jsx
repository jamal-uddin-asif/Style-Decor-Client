
import Container from '../Components/Shared/Container';
import Logo from '../Components/Shared/Logo';
import { Link, Outlet } from 'react-router';
import { IoIosAddCircle, IoIosLogOut, IoIosTimer } from 'react-icons/io';
import SideLink from '../Components/Shared/SideLink';
import { TiThMenu } from "react-icons/ti";
import { FaChartLine, FaChevronDown, FaChevronUp, FaHistory, FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdAddchart, MdManageHistory, MdMyLocation } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { GrUserManager } from "react-icons/gr";
import { SiSimpleanalytics } from 'react-icons/si';
import { useState } from 'react';
import { FaSackDollar } from 'react-icons/fa6';

const DashboardLayout = () => {
  const { LogOutUser} = useAuth()
  const [show, setShow] = useState(false)


  const handleSignOut = () =>{
    LogOutUser()
    .then(()=>{
      toast.success('Logout successful')
    })
  }
  console.log(show)

  const handleShowHide = () =>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }

    return (

   <div className='md:grid bg-base-100 relative grid-cols-12 gap-3 '>
       <div className='md:col-span-3   bg-gray-300  col-span-5 shadow p-2 md:p-5 md:min-h-screen'>
          <ul className='md:py-6'>
             <Logo className={'bg-blue-200 py-3 md:text-3xl'}></Logo>
        <div onClick={handleShowHide} className='p-2 flex md:hidden justify-center items-center bg-white'>
        {
          show ?  <FaChevronUp />: <FaChevronDown/> 
        }  
        </div >
        <ul className={`${show? 'hidden md:block transition-all duration-100': ''}`}>
          {/* user  */}
          <li><SideLink to={'/dashboard/myBookings'} icon={<FaUser size={25}/>} address={'My Bookings'}></SideLink></li>
          <li><SideLink to={'/dashboard/paymentHistory'} icon={<FaHistory size={25} />} address={'Payment History'}></SideLink></li>
          {/* admin  */}
           <li ><SideLink to={'/dashboard/RevenueMonitoring'} icon={<FaChartLine size={25} />} address={'Revenue'}></SideLink></li>
           <li ><SideLink to={'/dashboard/analytics'} icon={<SiSimpleanalytics />} address={'Analytics'}></SideLink></li>
          <li ><SideLink to={'/dashboard/addServices'} icon={<MdAddchart size={30}/>} address={'Add Services'}></SideLink></li>
          <li><SideLink to={'/dashboard/manageDecorator'} icon={<GrUserManager size={28}/>} address={'Manage Decorator'}></SideLink></li>
          <li><SideLink to={'/dashboard/manageBookings'} icon={<TbBrandBooking size={30}/>} address={'Manage Bookings'}></SideLink></li>
          <li><SideLink to={'/dashboard/manageServices'} icon={<MdManageHistory size={30} />} address={'Manage Services'}></SideLink></li>
          {/* Decorator  */}
          <li><SideLink to={'/dashboard/myAssignedServices'} icon={<MdMyLocation size={25}/>} address={'My Assigned Services'}></SideLink></li>
          <li><SideLink to={'/dashboard/TodaysSchedule'} icon={<IoIosTimer size={25} />} address={'Todays Schedule'}></SideLink></li>
          <li><SideLink to={'/dashboard/EarningsSummary'} icon={<FaSackDollar  size={25} />} address={'Earnings Summary'}></SideLink></li>
          </ul>
          </ul>

          <div className={`md:py-10 border-t ${show? 'hidden md:block transition-all duration-100': ''}`}>
            <ul>
              <li><SideLink to={'/dashboard/profile'} icon={<CgProfile />} address={'Profile'}></SideLink></li>
              <button onClick={()=>handleSignOut()} className='btn bg-amber-400 w-full mt-2 rounded-xl p-'><IoIosLogOut size={30} />Logout</button>
            </ul>
          </div>
          
        </div>
        
        <div className='md:col-span-9   col-span-6 md:p-10'>
          <Outlet></Outlet>
        </div>
   </div>

   
    );
};

export default DashboardLayout;