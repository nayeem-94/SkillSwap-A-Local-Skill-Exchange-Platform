import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const isLoggedIn = !!user;

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         toast.error("You must log in to see the dashboard!");
    //         // Optional: redirect to login
    //         navigate("/login", { replace: true });
    //     }
    // }, [isLoggedIn, navigate]);

    if (!isLoggedIn) return null; // prevent rendering the dashboard content

    return (
        <div className='bg-cyan-50 p-10'>
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl">
                <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
                    Welcome to your Dashboard
                </h2>

                <div className="flex flex-col items-center gap-6">
                    {/* Profile Image */}
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-indigo-500">
                        <img
                            src={user?.photoURL}
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* User Details */}
                    <div className="w-full text-lg bg-indigo-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
                        <p className="font-semibold text-indigo-700">
                            Name: <span className="text-gray-800">{user?.displayName || "[ No name provided ]"}</span>
                        </p>
                        <p className="font-semibold text-indigo-700">
                            Email: <span className="text-gray-800">{user?.email}</span>
                        </p>
                        <p className="font-semibold text-indigo-700">
                            Phone Number: <span className="text-gray-800">{user?.phoneNumber || "[ No Phone Number provided ]"}</span>
                        </p>
                    </div>

                    {/* Button */}
                    <button className="mt-6 px-6 py-3 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg transition">
                        Update Your Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
