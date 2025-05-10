import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/Homelayout/LeftAside';
import RightAside from '../components/Homelayout/RightAside';
import Categories from '../components/Categories';
import FindUs from '../components/Homelayout/FindUs';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto border border-red-400 grid grid-cols-12 gap-5 text-center'>
                <aside className='col-span-3'>
                    <LeftAside>
                    </LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet>

                    </Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside>
                    </RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;