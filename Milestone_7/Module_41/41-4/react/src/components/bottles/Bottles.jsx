import React, { use, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles)

    const[cart, setCart]=useState([])
    const handleCart=(bottle)=>{
        console.log('Button is worked', bottle)
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <div className='bottles-container'>
            {
                bottles.map(bottle=> <Bottle bottle={bottle} key={bottle.id} handleCart={handleCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;