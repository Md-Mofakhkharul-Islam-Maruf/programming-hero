import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoriesPromise)
    // console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All categories({categories.length})</h2>
            <div className='grid grid-cols-1 mt-4 gap-2'>
              {
                categories.map(categori=> 
                <NavLink key={categori.id} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'} to={`/category/${categori.id}`}>{categori.name}</NavLink>)
              }
            </div>
        </div>
    );
};

export default Categories;