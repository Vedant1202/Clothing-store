/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>;
            })}
            <div className='total'>Cart Total: $ {cartTotal}</div>
            <div className='test-warning'>
                *Please use the following credit card details for sample payments * <br />
                4242 4242 4242 4242 <br />
                Exp: 01/20 <br />
                CVV: 123 <br />
            </div>
            <StripeCheckoutButton price={cartTotal}></StripeCheckoutButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
