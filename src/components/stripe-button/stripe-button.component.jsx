/** @format */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceToUsd = price * 100;
    const publishableKey =
        'pk_test_51GyNCFDmIr6vQapHF389gtwMEgAvxAJkdIh6XAvFthUF9NcJm3AdxMLmFXxZLAH0et8NC7QFrMXUklkCUX9cysoh00oV8PlXmt';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
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

export default StripeCheckoutButton;
