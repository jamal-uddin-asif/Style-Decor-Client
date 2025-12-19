import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { CiMail, CiUser } from 'react-icons/ci';

const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div className='min-h-screen   flex justify-center items-center'>
           <div className='shadow-2xl rounded-2xl p-8'>
            <h1 className='text-xl font-semibold mb-5 text-center'>My profile</h1>
                <div>
                    <div className=' '>
                        <img className='rounded-full mx-auto h-20 w-20'  src={user.photoURL} alt="" />
                        {/* <h1 className='text-3xl font-bold'>{user.displayName}</h1> */}
                    </div>

                    <div>
                         <div className=' bg-white rounded-2xl shadow-xl p-3 md:p-8'>
           <h1 className='md:text-4xl text-2xl text-center mb-2'>Account Details</h1>

           <div className='space-y-4 md:p-5'>
            <div className='flex gap-7 items-center bg-secondary text-white md:p-5 p-2 rounded-2xl'>
                <div>
                <CiUser  size={29} />
                </div>
                <div>
                    <p>Full Name</p>
                    <p className='md:not-[]:text-2xl'>{user.displayName}</p>

                </div>
            </div>
            <div className='flex  gap-7 items-center bg-secondary text-white md:p-5 p-2 rounded-2xl'>
                <div>
                <CiMail size={29}/>
                </div>
                <div>
                    <p>Email</p>
                    <p className='md:text-2xl'>{user.email}</p>

                </div>
            </div>
            <div className='flex gap-7 items-center bg-secondary text-white md:p-5 p-2 rounded-2xl'>
                <div>
                <CiMail size={29}/>
                </div>
                <div>
                    <p>Email</p>
                    <p className='md:text-2xl'>{user.emailVerified === true ? 'Verified': 'Not verified'}</p>

                </div>
            </div>
           </div>
        </div>
                    </div>
                    
                </div>
           </div>
        </div>
    );
};

export default Profile;