import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4GHS_fEDd6o8A7JnM4xlHzjCfOa4hwrA",
    authDomain: "crwn-db-2d76c.firebaseapp.com",
    databaseURL: "https://crwn-db-2d76c.firebaseio.com",
    projectId: "crwn-db-2d76c",
    storageBucket: "crwn-db-2d76c.appspot.com",
    messagingSenderId: "978100784487",
    appId: "1:978100784487:web:f6bd910d16ef50f45773c2",
    measurementId: "G-BQVNGGS9XX"
};

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return false;

    const userRef = firestore.doc(`users/${user.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error: ' + error.message);
            throw error;
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;
