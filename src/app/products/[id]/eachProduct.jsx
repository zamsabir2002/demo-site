"use client";

import React from 'react';
import Carousel from './carousel';
import AddButton from '../addbutton';
import Link from 'next/link';

const EachProduct = ({ products }) => {

    return (
        <div className='min-w-full'>
            <div className="flex mb-8 align-middle items-center justify-between py-2 px-5 text-lg font-medium bg-red-600 text-white rounded-md">
                <Link href={"/products"}>
                    <span
                        className="rounded py-1 px-3 bg-stone-500/75">Back</span>
                </Link>
                <span>NC</span>

            </div>
            <div className='my-4 p-4 min-h-[70vh] md:flex md:gap-5 md:items-center md:justify-center md:items-center'>
                <Carousel
                    images={products.images}
                />
                <div className=''>

                    <h1 className='mt-5 font-bold text-4xl font-serif antialiased'>{products.title}</h1>
                    <div className='mt-2 text-base'>{products.description}</div>

                    <p className='inline text-xl font-bold text-rose-600'>&#36; {products.price}  </p>

                    <AddButton
                        products={products}
                    />

                </div>
            </div>
        </div>
    );
}

export default EachProduct;