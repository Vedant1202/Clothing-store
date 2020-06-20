/** @format */

import React from 'react';

import './signin-register.styles.scss';
import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

const SigninRegisterPage = () => {
    return (
        <div className='signin-register'>
            <Signin></Signin>
            <Signup></Signup>
        </div>
    );
};

export default SigninRegisterPage;
