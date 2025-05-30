import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;