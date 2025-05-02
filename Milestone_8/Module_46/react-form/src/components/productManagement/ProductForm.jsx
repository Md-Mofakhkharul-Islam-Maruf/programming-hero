import React from 'react';

const ProductForm = () => {
    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.product_name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity);
        

    }
    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="product_name" placeholder="Product Name" /><br />
                <input type="text" name="price" placeholder="Price" /><br />
                <input type="text" name="quantity" placeholder="Quantity" /><br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default ProductForm;
