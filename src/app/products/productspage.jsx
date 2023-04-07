"use client";

import React, { useEffect, useState } from 'react';
import Product from './product';
import { paginate } from '../paginate';
import Pagination from './pagination';
import Cart from './cart';
import cartUpdateFunctions from '../utils/cartUpdate';

async function getProducts() {
    const getdata = await fetch('https://dummyjson.com/products')
    const data = await getdata.json();
    return data
}



export default function ProductsPage() {
    const [pageNumber, setPageNumber] = useState(1)
    const [products, setProducts] = useState({})
    const [cartShow, setCartShow] = useState(false)
    const [cartItems, setCartItems] = useState({})


    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
        return data
    }

    useEffect(() => {
        fetchProducts();
        setCartItems(cartUpdateFunctions.getCart())
    }, [])

    // useEffect(() => {
    // }, [cartItems])

    const paginatedProducts = paginate(products["products"], pageNumber, 10);

    if (typeof window !== "undefined") {
        if (cartShow) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
    // console.log(cartItems)
    return (
        <div>
            {cartShow &&
                <Cart
                    cartShow={cartShow}
                    setCartShow={setCartShow}
                    cart={cartItems}
                    setCartItem={setCartItems}
                />}

            {/* // Main container */}
            <div className='min-w-full'>
                <div className="flex mb-8 align-middle items-center justify-between py-2 px-5 text-lg font-medium bg-red-600 text-white rounded-md">
                    <span>NC</span>
                    <span
                        role='button'
                        className="rounded py-1 px-3 bg-slate-600"
                        onClick={() => setCartShow(!cartShow)}
                    >Cart</span>
                </div>
                <div className='mt-6 mb-3'>
                    <div className="text-center text-3xl font-medium">AVAILABLE <span className="text-red-500">ITEMS</span>
                    </div>

                    <div
                        className='p-6 grid grid-cols-1 justify-items-center gap-4 gap-y-5 mt-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
                        {paginatedProducts && paginatedProducts.map((data) =>
                            <Product
                                key={data.id}
                                product={data}
                                setCartItems={setCartItems}
                            />
                        )}
                    </div>

                    {/* {console.log(products["products"].length)} */}

                </div>
                <Pagination
                    itemsCount={30}
                    pageSize={10}
                    currentPage={pageNumber}
                    onPageChange={setPageNumber}
                />

            </div>
        </div>
    );
}
