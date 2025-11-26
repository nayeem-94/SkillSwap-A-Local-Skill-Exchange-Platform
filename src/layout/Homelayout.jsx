import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';

const Homelayout = () => {
    return (
        <div className='container mx-auto' >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Homelayout;