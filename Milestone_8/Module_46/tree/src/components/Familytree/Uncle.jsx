import React, { useContext } from 'react';
import Cousine from './Cousine';
import { AssetContext } from './Familytree';

const Uncle = () => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousine name='Mykel'></Cousine>
                <Cousine name='JO Joooo'></Cousine>
            </section>
            <div>
                <h4>New Asset is: {newAsset}</h4>
            </div>
        </div>
    );
};

export default Uncle;