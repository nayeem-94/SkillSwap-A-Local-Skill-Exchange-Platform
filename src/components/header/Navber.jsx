import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {

    const { user, logOut, } = useContext(AuthContext);
    const isLoggedIn = !!user;


    const userProfile = {
        userName: user?.displayName?.trim() || "No name provided",
        avatarUrl: user?.photoURL,
    };

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("You Logged Out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <div className='flex justify-between items-center p-4 bg-white shadow '>
                <div className=" text-xl md:text-2xl font-bold text-indigo-600">
                    <NavLink to="/home">SkillSwap</NavLink>
                </div>
                <div className='space-x-4'>
                    <span className=" font-medium  "> <NavLink to="/home">Home</NavLink> </span>
                    {
                        // isLoggedIn ? ( <>
                        <span className="  font-medium  "> <NavLink to="/dashboard">My Profile</NavLink> </span>
                        // {/* </>) : (<></>) */}
                    }

                    {/* <span className="  font-medium  "> <NavLink to="/myprofile">My Profile</NavLink> </span> */}

                </div>
                <div className='flex gap-2' >
                    {isLoggedIn ? (
                        <>
                            <div className="relative group">
                                <img
                                    src={userProfile.avatarUrl}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full border-2 border-indigo-500 cursor-pointer"
                                />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  scale-0 group-hover:scale-100   bg-gray-800 text-white text-xs px-2 py-1  rounded-md whitespace-nowrap  transition-transform duration-100">
                                    {userProfile.userName}
                                </span>

                            </div>

                            <span onClick={handleLogout} className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                                <NavLink to="/home">Logout</NavLink>
                            </span>

                        </>
                    ) : (
                        <>

                            <span className="px-3 py-1 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                                <NavLink to="/login">Login</NavLink>
                            </span>

                            <span className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                                <NavLink to="/register">Register</NavLink>
                            </span>
                        </>

                    )}


                </div>

            </div>
        </>
    );
};

export default Navber;