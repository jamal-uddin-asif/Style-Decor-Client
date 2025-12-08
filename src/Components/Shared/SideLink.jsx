import React from 'react';
import { Link } from 'react-router';

const SideLink = ({to, address, icon}) => {
    return (
        <Link to={to} className={'border mt-2 '}>
           {icon} { address}
        </Link>
    );
};

export default SideLink;