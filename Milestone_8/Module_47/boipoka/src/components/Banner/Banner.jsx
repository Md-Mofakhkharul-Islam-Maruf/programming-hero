import React from 'react';
import boiImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around'>
            <div className=''>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ad!</h1>
                <button className='btn btn-primary'>Test</button>
            </div>
            <div>
                <img className='w-3/12' src={boiImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;