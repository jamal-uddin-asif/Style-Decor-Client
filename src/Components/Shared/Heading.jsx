import React from 'react';

const Heading = ({Heading, sub_heading, className}) => {
    return (
        <div className={`py-25  text-center  md:10 flex justify-center items-center bg-secondary ${className}`}>
            <div>
                <h2 className='text-3xl md:text-5xl text-white mb-4 md:mb-6'>{Heading}</h2>
                <p className='text-white text-2xl'>{sub_heading}</p>
            </div>
        </div>
    );
};

export default Heading;