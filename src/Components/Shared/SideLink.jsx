import React from 'react';
import { Link } from 'react-router';

const SideLink = ({to, address, icon}) => {
    return (
        <Link  to={to} className={({isActive})=>isActive ? "bg-green-600": 'border mt-2 flex justify-center items-center'}>
           {icon} { address}
        </Link>
    );
};

export default SideLink;