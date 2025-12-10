import React from 'react';
import notFound from '../../assets/404.jpg'

const PageNotFound = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img className='max-h-screen ' src={notFound} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;