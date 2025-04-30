import React from 'react';
import Grandpa from './Grandpa';
import './family-tree.css';

const Familytree = () => {
    return (
        <div className='family-tree'>
            <h2>Family tree</h2>       
            <Grandpa></Grandpa>     
        </div>
    );
};

export default Familytree;