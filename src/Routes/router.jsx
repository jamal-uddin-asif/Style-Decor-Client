import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../Pages/Dashboard/AddServices/AddServices";
import ManageDecorator from "../Pages/Dashboard/ManageDecoretor/ManageDecorator";
import ServicesDetails from "../Pages/ServiceDetails/ServicesDetails";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess/PaymentSuccess";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import MyAssignServices from "../Pages/Dashboard/MyAssignServices/MyAssignServices";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ManageServices from "../Pages/Dashboard/ManageServices/ManageServices";
import Trackings from "../Pages/Dashboard/MyBookings/Trackings/Trackings";
import RevenueMonitoring from "../Pages/Dashboard/RevenueMonitoring/RevenueMonitoring";
import Analytics from "../Pages/Dashboard/Analytics/Analytics";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }, 
            {
                path: 'services',
                Component: Services
            },
            {
                path: 'services/:id',
                Component: ServicesDetails
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'contact',
                Component: Contact
            },

            // Auth related route 
            {
                path:'/login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/RevenueMonitoring',
                Component: RevenueMonitoring
            },
            {
                path: '/dashboard/analytics',
                Component: Analytics
            },
            {
                path: '/dashboard/addServices',
                Component: AddServices
            },
            {
                path: '/dashboard/manageDecorator',
                Component: ManageDecorator
            },
            {
                path: '/dashboard/myBookings',
                Component: MyBookings
            },
            {
                path: '/dashboard/trackings/:trackingId',
                Component: Trackings
            },
            {
                path: '/dashboard/myAssignedServices',
                Component: MyAssignServices
            },
            {
                path: '/dashboard/profile',
                Component: Profile
            },
            {
                path: '/dashboard/manageBookings',
                Component: ManageBookings
            },
            {
                path: '/dashboard/manageServices',
                Component: ManageServices
            },
            {
                path: '/dashboard/payment-success',
                Component: PaymentSuccess
            },
        ]
    },
    {
        path: '/*',
        Component: PageNotFound
    }

])