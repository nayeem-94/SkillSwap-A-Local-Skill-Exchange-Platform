import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { Star } from "lucide-react";


const SingelCartDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const item = data[id - 1];

    // console.log(skilldata);
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-blue-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Card Container */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">

                    {/* Header Background */}
                    <div className="h-10 mb-10 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

                    {/* Content Section */}
                    <div className="px-8 md:px-12 py-8">

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8 text-center -mt-16 relative z-10 bg-white inline-block w-full">
                            {item.skillName}
                        </h1>

                        {/* Image Section */}
                        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-shadow">
                            <img
                                src={item.image}
                                alt={item.skillName}
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Info Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {/* Left Column */}
                            <div className="space-y-5">
                                <InfoItem label="Category" value={item.category} />
                                <InfoItem label="Provider" value={item.providerName} />
                                <InfoItem label="Email" value={item.providerEmail} highlight="text-blue-600" />
                            </div>

                            {/* Right Column */}
                            <div className="space-y-5">
                                <InfoItem label="Rating" value={`⭐ ${item.rating}/5`} highlight="text-yellow-500 font-bold" />
                                <InfoItem label="Price" value={`$${item.price}`} highlight="text-green-600 font-bold text-lg" />
                                <InfoItem label="Available Slots" value={item.slotsAvailable} highlight="text-purple-600 font-bold" />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-10 border-l-4 border-indigo-600">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <span className="font-semibold text-indigo-700">Description: </span>
                                {item.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 cursor-pointer py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                <NavLink to="/booking" className="flex-1 ">
                                    Book Provider
                                </NavLink>
                            </button>
                            <NavLink to="/home" className="flex-1 ">
                                <button className="w-full cursor-pointer py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                    ← Back to Home
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function InfoItem({ label, value, highlight = "text-gray-800" }) {
        return (
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{label}</span>
                <span className={`text-lg ${highlight}`}>{value}</span>
            </div>
        );
    }
};

export default SingelCartDetails;