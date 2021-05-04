/** @format */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { saveOrder } from '../../firebase/firebase.utils';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const StripeCheckoutButton = ({ price, currentUser, clearCart, cartItems, cartTotal }) => {
    const priceToUsd = price * 100;
    const publishableKey =
        'pk_test_51GyNCFDmIr6vQapHF389gtwMEgAvxAJkdIh6XAvFthUF9NcJm3AdxMLmFXxZLAH0et8NC7QFrMXUklkCUX9cysoh00oV8PlXmt';

    const onToken = async token => {
        console.log(token);
        alert('Payment successful');
        // console.log(currentUser);
        const savedOrder = await saveOrder(cartItems, currentUser.id, cartTotal);
        console.log(savedOrder);
        clearCart();
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing LTD'
            billingAddress
            shippingAddress
            image={`./crown.svg`}
            description={`Your total cart value is $ ${price}`}
            amount={priceToUsd}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => {
            dispatch(clearCart([]));
        },
    };
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);
