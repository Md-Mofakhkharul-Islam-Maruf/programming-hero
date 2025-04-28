import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid grid-cols-3'>
                {
                    pricingData.map(price => <PricingCard price={price} key={price.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;