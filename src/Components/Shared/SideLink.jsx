import React from 'react';
import { Link } from 'react-router';

const SideLink = ({to, address}) => {
    return (
        <Link to={to} className={({isActive})=> isActive? 'bg-secondary font-semibold': ''}>
            {address}
        </Link>
    );
};

export default SideLink;