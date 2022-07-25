import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div className='name-price'>
                    <p className='product-name'>{name}</p>
                    <p>Price :$ {price}</p>
                </div>
                <div className='small-info'>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings} Stars</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='button-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;