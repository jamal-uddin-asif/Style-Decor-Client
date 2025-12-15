
import Container from '../Components/Shared/Container';
import Logo from '../Components/Shared/Logo';
import { Link, Outlet } from 'react-router';
import { IoIosAddCircle, IoIosLogOut } from 'react-icons/io';
import SideLink from '../Components/Shared/SideLink';
import { TiThMenu } from "react-icons/ti";
import { FaChartLine, FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdAddchart, MdManageHistory, MdMyLocation } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { GrUserManager } from "react-icons/gr";
import { SiSimpleanalytics } from 'react-icons/si';

const DashboardLayout = () => {
  const { LogOutUser} = useAuth()

  const handleSignOut = () =>{
    LogOutUser()
    .then(()=>{
      toast.success('Logout successful')
    })
  }

    return (

   <div className='md:grid bg-base-100 relative grid-cols-12 gap-3 '>
       <div className='md:col-span-3   bg-gray-300  col-span-5 shadow p-2 md:p-5 md:min-h-screen'>
          <ul className='md:py-10'>
             <Logo className={'bg-blue-200 py-3 md:text-3xl'}></Logo>
          {/* user  */}
          <li><SideLink to={'/dashboard/myBookings'} icon={<FaUser />} address={'My Bookings'}></SideLink></li>
          {/* admin  */}
           <li ><SideLink to={'/dashboard/RevenueMonitoring'} icon={<FaChartLine size={25} />} address={'Revenue'}></SideLink></li>
           <li ><SideLink to={'/dashboard/analytics'} icon={<SiSimpleanalytics />} address={'Analytics'}></SideLink></li>
          <li ><SideLink to={'/dashboard/addServices'} icon={<MdAddchart />} address={'Add Services'}></SideLink></li>
          <li><SideLink to={'/dashboard/manageDecorator'} icon={<GrUserManager />} address={'Manage Decorator'}></SideLink></li>
          <li><SideLink to={'/dashboard/manageBookings'} icon={<TbBrandBooking />} address={'Manage Bookings'}></SideLink></li>
          <li><SideLink to={'/dashboard/manageServices'} icon={<MdManageHistory size={30} />} address={'Manage Services'}></SideLink></li>
          {/* Decorator  */}
          <li><SideLink to={'/dashboard/myAssignedServices'} icon={<MdMyLocation />} address={'My Assigned Services'}></SideLink></li>
          </ul>

          <div className='md:py-10 border-t'>
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