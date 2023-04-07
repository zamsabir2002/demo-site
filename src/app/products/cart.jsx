import Link from 'next/link';
import React from 'react';
import cartUpdateFunctions from '../utils/cartUpdate';




const Cart = ({ cartShow, setCartShow, cart, setCartItem }) => {

    const handleDelete = (item) => {
        const updatedCart = cartUpdateFunctions.deleteItem(item)
        setCartItem(updatedCart)
    }

    return (
        // Background
        <div
            className={cartShow ? ' w-full absolute top-0 right-0 h-full z-[100]  bg-slate-800/75 ease-in-out overflow-hidden overflow-y-scroll' : "w-0 absolute top-0 right-0 h-full z-[100] bg-slate-800/75 ease-in-out overflow-y-scroll"}
            data-focus-lock-disabled='false'
        >
            {/* Container */}
            <div
                className={cartShow ? 'w-[350px] absolute top-0 right-0 h-full z-[100]  bg-gray-700 transition-all ease-in-out  overflow-hidden' : "w-0 relative top-0 right-0 h-full z-[100]  bg-gray-700 transition-all ease-in-out overflow-hidden"}
                tabIndex={1}
            >
                <div
                    role='button'
                    className='text-right m-3 pe-2 font-bold bg-red-500 ml-[88%] rounded-lg'
                    onClick={() => setCartShow(!cartShow)}
                    autoFocus
                >X</div>
                <h1 className='text-4xl text-center mt-7 mb-6'>Selected Items</h1>

                {cart ? cart.map((each) =>

                    <div class="py-3 flex flex-col justify-start items-center bg-slate-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-600 border-gray-700 bg-gray-800 hover:bg-slate-600 h-20 mb-2">
                        <img class="object-scale-down rounded-t-lg md:h-12 md:w-28 md:rounded-none md:rounded-l-lg h-full" src={each.images[0]} alt="" />
                        <div class="flex flex-col justify-normal p-4 leading-normal">
                            <h5 class="mt-3 font-bold tracking-tight text-gray-900 text-white">{each.title}</h5>
                            <p class="mb-3 font-normal text-gray-200 text-gray-400">&#36; {each.price}</p>
                        </div>
                        <div className='flex flex-col font-bold text-center'>
                            <h5>Quantity</h5>
                            <h5>
                                {each.quantity}
                            </h5>
                        </div>
                        <div
                            role='button'
                            className='bg-rose-600 p-1 mx-2 rounded'
                            onClick={() => handleDelete(each)}
                        >Remove</div>
                    </div>

                ) : "No Items Added"}




            </div>
        </div>
    );
}

export default Cart;