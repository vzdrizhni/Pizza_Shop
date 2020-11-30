import React from 'react'
import './piza-list-item.css'
import AddToCart from '../AddToCart/AddToCart'

const PizzaListItem = ({pizza}) => {
    const cartItem = {...pizza}
    cartItem.number = 0
    return (
        <div className='piza-card'>
            <h1>{pizza.title}</h1>
            <img src={pizza.picture} alt={pizza.title} />
            <h4>{pizza.price}</h4>
            <AddToCart title={cartItem}/>
        </div>
    )
}

export default PizzaListItem
