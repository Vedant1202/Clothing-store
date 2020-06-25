/** @format */

import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, adjBtn, ...otherComponentProps }) => {
    return (
        <button
            className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${
                adjBtn ? 'adj-btn' : ''
            }`}
            {...otherComponentProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
