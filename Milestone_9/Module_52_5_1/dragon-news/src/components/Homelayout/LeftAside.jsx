import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={'fvhkjsdhffhgvjdfh'}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;