import React, { use } from 'react';
import Bottle from './botlle/bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    console.log(bottles)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            {
                bottles.map(bottle=> <Bottle bottle={bottle} key={bottle.id}></Bottle>)
            }
        </div>
    );
};

export default Bottles;