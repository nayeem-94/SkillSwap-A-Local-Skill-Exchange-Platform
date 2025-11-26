// Navbar.jsx (Using Tailwind CSS)

import React, { useState } from 'react';

const Test = () => {
    // --- SIMULATED AUTH STATE ---
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false to see logged-out view
    const user = {
        displayName: "Anya Forger",
        avatarUrl: "https://i.pravatar.cc/150?img=12" // Placeholder avatar
    };

    const handleAuthAction = (action) => {
        if (action === 'logout') {
            setIsLoggedIn(false);
            console.log('Logging out...');
        } else {
            setIsLoggedIn(true);
            console.log(`${action} successful.`);
        }
    };
    // -----------------------------

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Section 1: Logo and Main Links */}
                    <div className="flex items-center space-x-8">

                        {/* Logo */}
                        <a href="/" className="text-2xl font-bold text-indigo-600">
                            SkillSwap
                        </a>

                        {/* Home Link (Always Visible) */}
                        <a
                            href="/"
                            className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
                        >
                            Home
                        </a>

                        {/* My Profile Link (Logged In Only) */}
                        {isLoggedIn && (
                            <a
                                href="/profile"
                                className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
                            >
                                My Profile
                            </a>
                        )}
                    </div>

                    {/* Section 2: Auth Controls (Conditional) */}
                    <div className="flex items-center space-x-3">

                        {isLoggedIn ? (
                            /* --- LOGGED IN CONTROLS --- */
                            <>
                                {/* User Avatar (Shows displayName on hover) */}
                                <div className="relative group">
                                    <img
                                        src={user.avatarUrl}
                                        alt="User Avatar"
                                        className="w-8 h-8 rounded-full border-2 border-indigo-500 cursor-pointer"
                                        title={user.displayName} // Key requirement: Display name on hover
                                    />
                                    {/* Optional: Dropdown menu on click/hover for better UX */}
                                </div>

                                {/* Logout Button */}
                                <button
                                    onClick={() => handleAuthAction('logout')}
                                    className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            /* --- LOGGED OUT CONTROLS --- */
                            <>
                                {/* Login Button */}
                                <button
                                    onClick={() => handleAuthAction('login')}
                                    className="px-3 py-1 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                                >
                                    Login
                                </button>

                                {/* Signup Button */}
                                <button
                                    onClick={() => handleAuthAction('signup')}
                                    className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Signup
                                </button>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Test;