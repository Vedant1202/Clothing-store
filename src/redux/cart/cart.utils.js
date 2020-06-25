/** @format */

const addItemToCart = (cartItems, cartItemToAdd) => {
    const itemExistsInCart = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (itemExistsInCart) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const itemExistsInCart = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id;
    });

    if (itemExistsInCart.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
};

const clearItemFromCartUtility = (cartItems, cartItemToClear) =>
    cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export { addItemToCart, removeItemFromCart, clearItemFromCartUtility };
