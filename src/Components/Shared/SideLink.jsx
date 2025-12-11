import React from 'react';
import { Link } from 'react-router';

const SideLink = ({to, address, icon}) => {
    return (
        <Link  to={to} className={`flex items-center gap-2 text-xl border p-3 mt-2`}>
           {icon} { address}
        </Link>
    );
};

export default SideLink;