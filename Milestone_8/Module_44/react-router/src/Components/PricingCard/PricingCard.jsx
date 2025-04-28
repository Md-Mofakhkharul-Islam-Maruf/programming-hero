import React from 'react';
import { Circle, CircleCheckBig } from 'lucide-react';

const PricingCard = ({ price }) => {
    console.log(price)
    return (
        <div className='border-2 p-5 m-2 rounded-2xl bg-amber-600 text-white space-y-2'>
            <div>
                <h2 className='text-4xl'>{price.name}</h2>
                <h2 className='text-xl'>{price.price}</h2>
            </div>
            <div className='bg-amber-400 p-2 rounded-2xl'>
                <p className='bg-'>{price.description}</p>
            </div>
            <div className='bg-amber-500 p-2 rounded-2xl'>
                {
                    price.features.map(singleFeatures => <p className='flex gap-2 my-1'><span><CircleCheckBig/></span>{singleFeatures}</p>)
                }
            </div>
        </div>
    );
};

export default PricingCard;