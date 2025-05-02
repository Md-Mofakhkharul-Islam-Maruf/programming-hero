import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {

    const [error, setError] = useState('')

    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.product_name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const newProduct = { name, price, quantity }
        // console.log(newProduct)

        if (name.length === 0) {
            setError('Product must have a name')
            return;
        } else if (price.length === 0) {
            setError('Price must be a positive number')
            return;
        } else if (quantity.length === 0) {
            setError('quantity must be a positive number')
            return;
        } else
            setError('')

        handleAddProduct(newProduct)
    }
    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="product_name" placeholder="Product Name" /><br />
                <input type="text" name="price" placeholder="Price" /><br />
                <input type="text" name="quantity" placeholder="Quantity" /><br />
                <input type="submit" value='Submit' />
            </form>
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};

export default ProductForm;
