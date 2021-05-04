/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-menu/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser, selectCurrentUserAuth } from '../../redux/user/user.selector';

import './header.styles.scss';

const Header = ({ currentUser, currentUserAuth, cartDropdownHidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                {currentUserAuth && currentUser && currentUser.displayName ? (
                    <div className='title-name'>Hello, {currentUser.displayName.split(' ')[0]}</div>
                ) : (
                    <Link className='hidden' to='*'></Link>
                )}
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/myorders'>
                    My Orders
                </Link>
                {currentUserAuth ? (
                    <div
                        className='option'
                        onClick={() => {
                            auth.signOut();
                            window.location.reload();
                        }}
                    >
                        Sign Out
                    </div>
                ) : (
                    <Link className='option' to='/join'>
                        Sign In
                    </Link>
                )}
                <CartIcon></CartIcon>
            </div>
            {cartDropdownHidden ? null : <CartDropdown></CartDropdown>}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentUserAuth: selectCurrentUserAuth,
    cartDropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
