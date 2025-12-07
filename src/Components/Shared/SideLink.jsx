import React from 'react';
import { Link } from 'react-router';

const SideLink = ({to, address}) => {
    return (
        <Link to={to} className={'border mt-2 '}>
            {address}
        </Link>
    );
};

export default SideLink;