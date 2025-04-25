import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemovFromCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => 
                <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=>handleRemovFromCart(bottle.id)}>Remove cart</button>
                </div>)
            }            
        </div>
    );
};

export default Cart;