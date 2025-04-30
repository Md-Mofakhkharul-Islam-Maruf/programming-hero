import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div className='family-tree'>
            <h3>Grandpa</h3>  
            <section className='family-tree flex'>
                <Dad></Dad>   
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>          
        </div>
    );
};

export default Grandpa;