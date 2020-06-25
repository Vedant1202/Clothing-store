/** @format */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SigninRegisterPage from './pages/signin-register/signin-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser, setCurrentUserAuth } from './redux/user/user.actions';
import { selectCurrentUser, selectCurrentUserAuth } from './redux/user/user.selector';

import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const { setCurrentUser, setCurrentUserAuth } = this.props;
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });

                    setCurrentUserAuth(userAuth);
                });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className='App'>
                <Header></Header>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route exact path='/checkout' component={CheckoutPage}></Route>
                    <Route
                        exact
                        path='/join'
                        render={() =>
                            this.props.currentUser && this.props.currentUserAuth ? (
                                <Redirect to='/'></Redirect>
                            ) : (
                                <SigninRegisterPage></SigninRegisterPage>
                            )
                        }
                    ></Route>
                    <Route path='*' component={ErrorPage}></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentUserAuth: selectCurrentUserAuth,
});

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => {
            dispatch(setCurrentUser(user));
        },
        setCurrentUserAuth: userAuth => {
            dispatch(setCurrentUserAuth(userAuth));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
