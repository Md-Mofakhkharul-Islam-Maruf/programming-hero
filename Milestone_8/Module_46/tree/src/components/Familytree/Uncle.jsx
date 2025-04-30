import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousine name='Mykel'></Cousine>
                <Cousine name='JO Joooo'></Cousine>
            </section>            
        </div>
    );
};

export default Uncle;