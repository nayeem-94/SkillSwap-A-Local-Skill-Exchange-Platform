import React from 'react';
import Heroslider from './Heroslider';
import Allcard from './Allcard';
import TopRatedProviders from './TopratedProviders';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div className='' >
            <Heroslider ></Heroslider>
            <Allcard ></Allcard>
            <TopRatedProviders></TopRatedProviders>
            <HowItWorks></HowItWorks>
        </div>  
    );
};

export default Home;

