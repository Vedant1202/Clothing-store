/** @format */

import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SigninRegisterPage from './pages/signin-register/signin-register.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state  = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot((snapshot) => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                this.setState({
                    currentUser: null
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
                <Header currentUser={this.state.currentUser}></Header>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/shop' component={ShopPage}></Route>
                    <Route exact path='/join' component={SigninRegisterPage}></Route>
                    <Route path='*' component={ErrorPage}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;
