import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { NavLink } from 'react-router';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const isLoggedIn = !!user;
                            console.log(user);

    return (
        <div className='bg-cyan-50 p-10'>
            {isLoggedIn ?
                (
                    <>
                        <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl  ">
                            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
                                Welcome to your Dashboard
                            </h2>


                            <div className="flex flex-col items-center gap-6">

                                {/* Profile Image */}
                                <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-indigo-500">
                                    <img
                                        src={user?.photoURL }
                                        alt="User Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* User Details */}
                                <div className="w-full text-lg bg-indigo-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
                                    <p className="font-semibold text-indigo-700">
                                        Name: <span className="text-gray-800">{user?.displayName || " [ No name provided ]"}</span>
                                    </p>
                                    <p className="font-semibold text-indigo-700">
                                        Email: <span className="text-gray-800">{user?.email}</span>
                                    </p>
                                    <p className="font-semibold text-indigo-700">
                                        Phone Number: <span className="text-gray-800">{user?.phoneNumber || " [ No Phone Number provided ]"}</span>
                                    </p>
                                </div>

                                {/* Button */}
                                <button className="mt-6 px-6 py-3 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg transition">
                                    Update Your Profile
                                </button>
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        <div className=' flex flex-col my-10 gap-10 justify-center items-center'>
                            <h2 className='text-3xl font-bold text-center mt-20 text-indigo-600'>Please log in to view your dashboard.</h2>
                            <span className="px-3 py-1 text-xl font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                                <NavLink to="/login">Login</NavLink>
                            </span>
                        </div>
                    </>
                )}

        </div>
    );
};

export default Dashboard;