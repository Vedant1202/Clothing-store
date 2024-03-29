/** @format */

import React from 'react';
import { withRouter } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.button.component';

import './signup.styles.scss';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {
                displayName,
            });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
            alert(error.message);
            throw error;
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='signup'>
                <h2> I do not have an account </h2> <span> Sign up with your Email and Password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        label='Your Name'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput name='email' type='email' label='Email' value={email} onChange={this.handleChange} required />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign Up </CustomButton>{' '}
                    </div>{' '}
                </form>{' '}
            </div>
        );
    }
}

export default withRouter(Signup);
