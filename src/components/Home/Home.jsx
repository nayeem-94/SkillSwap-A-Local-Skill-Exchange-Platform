import React from 'react';
import Heroslider from './Heroslider';
import Allcard from './Allcard';
import TopRatedProviders from './TopratedProviders';
import HowItWorks from './HowItWorks';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Home = () => {
    return (
        <div className='flex flex-col bg-cyan-50  ' >
            <div className='mt-8 mb-10 '>

            <Heroslider ></Heroslider>
            </div>
            <Allcard ></Allcard>
            <TopRatedProviders></TopRatedProviders>
            <HowItWorks></HowItWorks>
        </div>  
    );
};

export default Home;

