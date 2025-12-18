import React from 'react';
import { Link, NavLink } from 'react-router';

const SideLink = ({to, address, icon}) => {
    return (
        <NavLink  to={to} className={({isActive})=>`flex items-center gap-2    text-black font-semibold rounded-xl p-3 mt-2 ${isActive ? 'bg-secondary text-white': ''} `}>
           {icon} { address}
        </NavLink>
    );
};

export default SideLink;