/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <HashRouter basename={'/'}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </HashRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
