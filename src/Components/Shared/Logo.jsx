import React from 'react';
import { MdSd } from 'react-icons/md';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'} className='flex items-center gap-1'>
            <MdSd size={35} color='orange'/>
            <h2 className='font-bold '>Style <span className='text-secondary'> Decor</span></h2>
        </Link>
    );
};

export default Logo;