/** @format */

import { CartActionTypes } from './cart.types';

const toggleCartDropdown = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
    };
};

const addItem = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item,
    };
};

const removeItem = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item,
    };
};

const clearItemFromCart = item => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item,
    };
};

const clearCart = () => {
    return {
        type: CartActionTypes.CLEAR_CART,
        payload: [],
    };
};

export { toggleCartDropdown, addItem, removeItem, clearItemFromCart, clearCart };
