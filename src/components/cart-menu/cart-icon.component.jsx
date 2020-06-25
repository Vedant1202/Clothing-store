/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingBagIcon className='shopping-icon'></ShoppingBagIcon>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCartDropdown: () => {
            dispatch(toggleCartDropdown());
        },
    };
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
