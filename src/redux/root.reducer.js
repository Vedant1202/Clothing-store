/** @format */

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'],

};

export default persistReducer(persistConfig, rootReducer);
