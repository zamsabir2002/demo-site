

const getCart = () => {
    const cart = window.localStorage.getItem('cart')
    // console.log(cart)
    if (cart) {
        return JSON.parse(cart)
    } else {
        window.localStorage.setItem('cart', JSON.stringify([]))
        return []
    }
}

const setCart = (product) => {
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    // console.log("Else", cart)
    if (!cart) {
        // console.log('ran', cart)
        window.localStorage.setItem('cart', JSON.stringify([
            {
                ...product,
                quantity: 1
            }
        ]))
        return ([
            {
                ...product,
                quantity: 1
            }
        ]);
    } else {
        const item = cart.find((p) => p.id === product.id)
        const filteredCart = cart.filter((p) => p.id !== product.id)
        const newCart = [
            ...filteredCart,
            {
                ...product,
                quantity: item ? item.quantity + 1 : 1
            }
        ]
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart;
    }
}

const deleteItem = (product) => {
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    const item = cart.find((p) => p.id === product.id)
    const filteredCart = cart.filter((p) => p.id !== product.id)

    if (item.quantity > 1) {
        const newCart = [
            ...filteredCart,
            {
                ...item,
                quantity: item.quantity - 1
            }
        ]
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart;
    } else {
        const newCart = filteredCart;
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart;
    }
}

const cartUpdateFunctions = {
    getCart,
    setCart,
    deleteItem,
}
export default cartUpdateFunctions;