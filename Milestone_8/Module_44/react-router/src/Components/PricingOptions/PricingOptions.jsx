import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='md:grid grid-cols-2 lg:grid-cols-3'>
                {/* {
                    pricingData.map(price => <PricingCard price={price} key={price.id}></PricingCard>)
                } */}
                 {
                    pricingData.map(pricen =><DaisyPricing pricen={pricen} key={pricen.id}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;