/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reload: false,
        };
    }

    onLogout() {
        this.setState({
            reload: true,
        });
    }

    render() {
        console.log('loaded');
        console.log(this.props);
        const { currentUser, currentUserAuth } = this.props;
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
                    <Link className='option' to='/contact'>
                        Contact
                    </Link>
                    {currentUserAuth ? (
                        <div
                            className='option'
                            onClick={() => {
                                auth.signOut();
                                this.onLogout();
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
                </div>
            </div>
        );
    }
}

export default Header;
