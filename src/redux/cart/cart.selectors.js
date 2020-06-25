/** @format */

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

const selectCartItemCount = createSelector([selectCartItems], cartItems =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);

const selectCartTotal = createSelector([selectCartItems], cartItems =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
);

export { selectCartItems, selectCartHidden, selectCartItemCount, selectCartTotal };
