import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle, handleCart }) => {
    const { img, name, price, stock } = bottle;
    console.log(bottle)
    return (
        <div className='bottleCard'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>{stock} peice Available</p>
            <button onClick={()=>handleCart(bottle)}>Buy now</button>
        </div>
    );
};

export default Bottle;