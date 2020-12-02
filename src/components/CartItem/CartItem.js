import React from 'react'
import './cartItem.css'
import {changeNumber, increaseNumber, remove} from '../../actions/actions'
import {connect} from 'react-redux'

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
        if(cartTracker.length === 1) {localStorage.clear()}
        remove(cart);
    }

    return (
        <div className='product'>
                <div className="product-image">
                    <img src={cart.picture} />
                </div>
                <div className="product-details">
                    <div className="product-title">{cart.title}</div>
                    <p className="product-description"></p>
                </div>
                <div className="product-price">{cart.price}</div>
                <div className="product-quantity">
                    <span>{cart.number}</span>
                    <button onClick={increase}>+</button>
                    <button onClick={decrease} disabled={disabled}>-</button>
                </div>
                <div className="product-removal">
                <button className="remove-product" onClick={removeItem}>
                    Remove
                </button>
                </div>
                <div className="product-line-price">{cart.number * cart.price}</div>
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
