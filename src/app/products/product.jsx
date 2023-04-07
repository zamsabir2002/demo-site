
import Link from 'next/link';
import React from 'react';
import Addbutton from './addbutton';


const Product = ({ product, setCartItems }) => {



    return (

        // <div
        //             className='p-6 grid grid-cols-1 justify-items-center gap-4 gap-y-5 mt-5 sm:grid-cols-2 lg:grid-cols-3'>
        //             {products["products"].map((data) =>
        //                 <Product
        //                     product={data}
        //                 />
        //             )}
        //         </div>

        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>

            <div className='h-72'>
                <img
                    src={`${product.images[0]}`}
                    alt="product-image"
                    className="rounded-t-lg w-full h-full object-cover"
                />
            </div>
            <div className="p-5 flex flex-col justify-between">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {product.description}
                    </p>
                    <p className='my-2 font-bold text-xl'>&#36; {product.price}</p>
                </div>
                <div className="flex justify-around flex-wrap">

                    <Link href={`/products/${product.id}`}>
                        <span href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </span>
                    </Link>
                    <Addbutton
                        setCartItems={setCartItems}
                        product={product}
                    />
                </div>
            </div>
        </div>
    );
}

export default Product;