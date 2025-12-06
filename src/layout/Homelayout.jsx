import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
        <div className='container mx-auto ' >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Homelayout;