/** @format */

import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, adjBtn, ...otherComponentProps }) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${adjBtn ? 'adj-btn' : ''}`}
            {...otherComponentProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
