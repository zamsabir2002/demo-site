import React from 'react';
import cartUpdateFunctions from '../utils/cartUpdate';

const AddButton = ({ product, setCartItems = null }) => {
    const addToCart = () => {
        const newCart = cartUpdateFunctions.setCart(product)
        setCartItems !== null ? setCartItems(newCart) : null;
    }
    return (
        <span
            role='button'
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => addToCart()}
        >
            Add to Cart
        </span>
    );
}

export default AddButton;