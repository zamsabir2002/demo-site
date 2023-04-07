
import React from 'react';

import EachProduct from './eachProduct';

async function getProducts(pID) {
    const res = await fetch(`https://dummyjson.com/products/${pID}`)
    const data = await res.json();
    return data;
}


export default async function ProductPage({ params }) {
    const addToCart = () => {
        const newCart = cartUpdateFunctions.setCart(product)
        // pa setCartItems(products)
    }
    const products = await getProducts(params.id)
    return (
        <EachProduct
            products={products}
        />
    )
}