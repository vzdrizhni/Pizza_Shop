import React from 'react'
import './cartItem.css'

const CartItem = ({cart}) => {
    return (
        <div className='piza-item'>
            <img src={cart.picture} />
            <h1>{cart.title}</h1>
            <h4>Amount: {cart.number}</h4>
            <h4>Price: {cart.number * cart.price}</h4>
        </div>
    )
}

export default CartItem
