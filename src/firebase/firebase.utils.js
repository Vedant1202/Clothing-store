/** @format */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyC4GHS_fEDd6o8A7JnM4xlHzjCfOa4hwrA',
    authDomain: 'crwn-db-2d76c.firebaseapp.com',
    databaseURL: 'https://crwn-db-2d76c.firebaseio.com',
    projectId: 'crwn-db-2d76c',
    storageBucket: 'crwn-db-2d76c.appspot.com',
    messagingSenderId: '978100784487',
    appId: '1:978100784487:web:f6bd910d16ef50f45773c2',
    measurementId: 'G-BQVNGGS9XX',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const email = userAuth.email;
        const createdAt = new Date();
        let displayName = '';

        if (userAuth.displayName) {
            displayName = userAuth.displayName;
        } else if (additionalData && additionalData.displayName) {
            displayName = additionalData.displayName;
        } else {
            displayName = 'User';
        }

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = async (callback = false) => {
    await auth.signInWithPopup(provider);
    if (callback) {
        callback();
    }
};

export const saveOrder = async (cartItems, userId, cartTotal) => {
    const orderRef = await firestore.collection('orders').add({
        cartItems,
        userId,
        cartTotal,
    });

    return orderRef;
};

export const retrieveOrder = async userId => {
    const orderRef = await firestore
        .collection('orders')
        .where('userId', '==', userId)
        .get();

    return orderRef;
};

export default firebase;
