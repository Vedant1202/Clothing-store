/** @format */

import React from 'react';

import './order-item.styles.scss';

const OrderItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;

    return (
        <div className='order-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='Cart Item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='value'>{quantity}</span>
            </span>
            <span className='price'>$ {price}</span>
        </div>
    );
};

export default OrderItem;
