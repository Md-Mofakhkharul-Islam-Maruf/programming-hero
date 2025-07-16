import React from 'react';
import CategoriesSection from '../components/categoryCard/CategoriesSection';
import DiscountProducts from '../components/DiscountProducts/DiscountProducts';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <CategoriesSection></CategoriesSection>
            <DiscountProducts></DiscountProducts>
        </div>
    );
};

export default Home;