import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';

const Profile = () => {
    const {user} = useAuth()
    return (
        <div className='min-h-screen   flex justify-center items-center'>
           <div className='shadow-2xl '>
                <div>
                    <div className=' '>
                        <img className='rounded-full' src={user.photoURL} alt="" />
                        <h1 className='text-3xl font-bold'>{user.displayName}</h1>
                    </div>
                    
                </div>
           </div>
        </div>
    );
};

export default Profile;