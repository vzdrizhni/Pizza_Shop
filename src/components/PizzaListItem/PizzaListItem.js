import React from 'react'
import './piza-list-item.css'

const PizzaListItem = ({pizza}) => {
    console.log(pizza);
    return (
        <div className='piza-card'>
            <h1>{pizza.title}</h1>
            <img src={pizza.picture} alt={pizza.title} />
            <h4>{pizza.price}</h4>
        </div>
    )
}

export default PizzaListItem
