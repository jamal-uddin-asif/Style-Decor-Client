import React from 'react';
import { Link, NavLink } from 'react-router';

const SideLink = ({to, address, icon}) => {
    return (
        <NavLink  to={to} className={({isActive})=>`flex items-center gap-2  border  text-white rounded-xl p-3 mt-2 ${isActive ? 'bg-secondary': 'bg-secondary/30'} `}>
           {icon} { address}
        </NavLink>
    );
};

export default SideLink;