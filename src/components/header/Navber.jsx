import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navber = () => {
    const { user, logOut, setLoading } = useContext(AuthContext);
    const [loggingOut, setLoggingOut] = useState(false); // local state for logout spinner
    const navigate = useNavigate();
    
    const isLoggedIn = !!user;

    const userProfile = {
        userName: user?.displayName?.trim() || "No name provided",
        avatarUrl: user?.photoURL,
    };

    const handleLogout = () => {
        setLoggingOut(true); // show spinner

        logOut()
            .then(() => {
                toast.success("You have successfully logged out!");

                // Optional: show spinner for at least 1 second before redirect
                setTimeout(() => {
                    setLoggingOut(false); // hide spinner
                    navigate("/home"); // redirect to home after logout
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
                setLoggingOut(false);
            });
    };

    // Render spinner if logging out
    if (loggingOut) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className='flex justify-between items-center p-4 bg-white shadow'>
            <div className="text-xl md:text-2xl font-bold text-indigo-600">
                <NavLink to="/home">SkillSwap</NavLink>
            </div>
            <div className='space-x-4'>
                <span className="font-medium"><NavLink to="/home">Home</NavLink></span>
                <span className="font-medium"><NavLink to="/dashboard">My Profile</NavLink></span>
            </div>
            <div className='flex gap-2'>
                {isLoggedIn ? (
                    <>
                        <div className="relative group">
                            <NavLink to={"/dashboard"}>
                                <img
                                    src={userProfile.avatarUrl}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full border-2 border-indigo-500 cursor-pointer"
                                />
                            </NavLink>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition-transform duration-100">
                                {userProfile.userName}

                            </span>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="px-3 py-1 text-sm cursor-pointer font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Logout
                        </button>
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
    );
};

export default Navber;
