import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total += product.price;
        shipping += product.shipping;
    }

    const tax = total*0.1;

    const grandtotal = parseFloat(total)+parseFloat(shipping)+parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: $ {shipping} </p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h5>Grand Total: $ {grandtotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;