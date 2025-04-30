import React from 'react';
import Header from '../Header/header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';
import './Root.css'

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Aside></Aside>
                {isNavigating && <span>Loading............</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;