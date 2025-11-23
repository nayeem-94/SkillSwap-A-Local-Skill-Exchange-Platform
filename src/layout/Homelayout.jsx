import React from 'react';
import { Outlet } from 'react-router';
import Hearder from '../components/header/Hearder';

const Homelayout = () => {
    return (
        <div>
            <Hearder></Hearder>
            <Outlet></Outlet>
        </div>
    );
};

export default Homelayout;