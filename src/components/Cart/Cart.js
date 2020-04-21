import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, prod) => total + prod.price, 0);

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }

    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }

    const tax = total / 10;
    
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const totalPrice = formatNumber (total + shipping + tax);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)} </p>
            <p><small>shipping cost: {shipping} </small></p>
            <p><small>Tax+VAT: {formatNumber(tax)} </small></p>
            <p>Total Price: {totalPrice} </p>
            <button className="main-button">Review Order</button>
        </div>
    );
};

export default Cart;