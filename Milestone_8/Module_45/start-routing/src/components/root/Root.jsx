import React from 'react';
import Header from '../Header/header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Aside></Aside>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;