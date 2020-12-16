import React from 'react'
import './cartItem.css'
import {changeNumber, increaseNumber, remove} from '../../actions/actions'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'

const CartItem = ({cart, changeNumber, increaseNumber, remove, cartTracker}) => {
    let disabled = '';

    if (cart.number <= 0) {
        disabled = 'disabled'
    } else {
        disabled = ''
    }

    const increase = (e) => {
        e.preventDefault()
        increaseNumber(cart);
    }

    const decrease = (e) => {
        e.preventDefault();
        changeNumber(cart)
    }

    const removeItem = (e) => {
        e.preventDefault();
        if(cartTracker.length === 1) {localStorage.removeItem('cartStorage')}
        remove(cart);
    }

    return (
        <div className='product'>
                <div className="product-image">
                    <img src={cart.picture} alt={cart.title}/>
                </div>
                <div className="product-details">
                    <div className="product-title">{cart.title}</div>
                    <p className="product-description"></p>
                </div>
                <div className="product-price">{cart.price}{cart.currency}</div>
                <div className="product-quantity">
                    <Button variant="dark" onClick={increase} size="sm">+</Button >
                    <span>{cart.number}</span>
                    <Button variant="dark" onClick={decrease} disabled={disabled} size="sm">-</Button >
                </div>
                <div className="product-removal">
                <button className="remove-product" onClick={removeItem}>
                    Remove
                </button>
                </div>
                <div className="product-line-price">{cart.number * cart.price}{cart.currency}</div>
        </div>
    )
}

const mapStateToProps = state => ({ cartTracker: state.cart});

const mapDispatchToProps = dispatch => ({
    changeNumber: value => dispatch(changeNumber(value)),
    increaseNumber: value => dispatch(increaseNumber(value)),
    remove: value => dispatch(remove(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
