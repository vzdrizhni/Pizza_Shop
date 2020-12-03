import React from 'react'
import './piza-list-item.css'
import AddToCart from '../AddToCart/AddToCart'

const PizzaListItem = ({pizza}) => {

    return (
        <div className='piza-card'>
            <h1>{pizza.title}</h1>
            <div className='info-wrapper'>
              <img src={pizza.picture} alt={pizza.title} />
              <h4>{pizza.price}{pizza.currency}</h4>
              <AddToCart title={pizza}/>
            </div>
        </div>
    )
}

export default PizzaListItem
