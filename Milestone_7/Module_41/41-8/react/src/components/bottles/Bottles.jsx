import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './bottles.css'
import { addToStoredCart } from '../utilities/localstorage';
import { getStoreCart } from '../utilities/localstorage';
import Cart from '../cart/cart';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles)

    const[cart, setCart]=useState([])
    const handleCart=(bottle)=>{
        // console.log('Button is worked', bottle)
        const newCart= [...cart, bottle];
        setCart(newCart)
        addToStoredCart(bottle.id)
    }

    const handleRemovFromCart= (id)=>{
        console.log('Remove item from the cart', id);
        const remainingCart = cart.filter(bottle =>bottle.id !==id)
        setCart(remainingCart)
        
    }

    useEffect(()=>{
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart =[]
        for (const id of storedCartIds) {
            console.log(id);
            const cartBottle= bottles.find(bottle=>bottle.id ===id)
            cartBottle && storedCart.push(cartBottle)
        }
        console.log('stored cart', storedCart)
        setCart(storedCart)
        
    },[bottles])

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <h4>Quantity: {cart.length}</h4>
            <Cart cart={cart} handleRemovFromCart={handleRemovFromCart}></Cart>
            <div className='bottles-container'>
            {
                bottles.map(bottle=> <Bottle bottle={bottle} key={bottle.id} handleCart={handleCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;