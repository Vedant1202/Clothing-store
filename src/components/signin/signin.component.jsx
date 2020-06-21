/** @format */

import React from 'react';
import { withRouter } from "react-router-dom";

import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleRedirect = () => {
        this.props.history.push("/");
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' }, () => {
              this.handleRedirect();
            });
        } catch (error) {
            console.log('Error: ' + error.message);
            alert(error.message);
            throw error;
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    handleGoogleSignInClick = async event => {
        event.preventDefault();

        await signInWithGoogle(this.handleRedirect);
    };

    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={this.handleGoogleSignInClick} isGoogleSignIn adjBtn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Signin);
