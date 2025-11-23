import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';

const Homelayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Homelayout;