import React from 'react'

const CartItem = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <img src={cart.picture} />
            <h1>{cart.title}</h1>
            <h4>{cart.number}</h4>
            <h4>{cart.number * cart.price}</h4>
        </div>
    )
}

export default CartItem
