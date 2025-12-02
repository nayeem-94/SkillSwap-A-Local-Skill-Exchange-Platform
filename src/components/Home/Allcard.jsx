import React from 'react';
import { useLoaderData } from 'react-router';
import Singelcart from './Singelcart';


const Allcard = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <div>
                <section className="bg-gradient-to-r from-cyan-600 via-teal-400 to-indigo-600 text-white py-12">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col  justify-center items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
                                Discover Local Skills — Learn, Teach, Swap
                            </h2>
                            <p className="mt-4 text-lg opacity-90">
                                Explore a vibrant community of makers, teachers and learners. Find workshops, one-on-one lessons, and skill swaps — all close to you.
                            </p>

                            
                            <div className="mt-6 flex gap-3">
                                <input
                                    aria-label="Search skills"
                                    className="flex-1 min-w-0 rounded-lg px-4 py-2 bg-white text-slate-800 placeholder-slate-500 shadow-sm focus:outline-none"
                                    placeholder="Search skills or people (e.g., Photography, Cooking, Coding)"
                                />
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow">
                                    Search
                                </button>
                            </div>
                        </div>

                        
                    </div>
                </section>

            </div>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 bg-cyan-50  justify-items-center p-3 gap-y-8 gap-x-2 '>
                {data.map(card => (
                    <Singelcart key={card.skillId} card={card}></Singelcart>
                ))}
            </div>
        </div>
        
    );
};

export default Allcard;