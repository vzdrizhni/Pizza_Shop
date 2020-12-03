import React from 'react'
import './piza-list-item.css'
import AddToCart from '../AddToCart/AddToCart'

const PizzaListItem = ({pizza}) => {
    const cartItem = {...pizza}
    cartItem.number = 0

    const currency = ['USD', 'EUR']

    return (
        <div className='piza-card'>
            <h1>{pizza.title}</h1>
            <div className='info-wrapper'>
              <img src={pizza.picture} alt={pizza.title} />
              <h4>{pizza.price}</h4>
              {/* <select className="CATEGORIES">
                  {currency.map(category => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
              </select> */}
              <AddToCart title={cartItem}/>
            </div>
        </div>
    )
}

export default PizzaListItem
