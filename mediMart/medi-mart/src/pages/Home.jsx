import React from 'react';
import CategoriesSection from '../components/categoryCard/CategoriesSection';
import DiscountProducts from '../components/DiscountProducts/DiscountProducts';
import FeaturedVendors from '../components/featuredVendors/FeaturedVendors';
import HealthTips from '../components/healthTips/HealthTips';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <CategoriesSection></CategoriesSection>
            <DiscountProducts></DiscountProducts>
            <FeaturedVendors></FeaturedVendors>
            <HealthTips></HealthTips>
        </div>
    );
};

export default Home;