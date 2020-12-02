import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem'
import './cart.scss'

const Cart = ({cart}) => {
    const total = cart.reduce((item, next) => {
        return item + next.price*next.number;
    }, 0)
    const shipping = 15;
    const tax = total*0.05;
    const finalPrice = total + shipping + tax;

    let raw;
    let storage = [];

    // if (storage.length === cart.length) {
    //   console.log(true);
    //   raw = localStorage.getItem('cartStorage');
    //   storage = JSON.parse(raw);
    // } else {
    //   localStorage.setItem('cartStorage', JSON.stringify(cart));
    //   raw = localStorage.getItem('cartStorage');
    //   storage = JSON.parse(raw);
    //   console.log(false);
    // }
    // console.log(storage, cart);

    const clear = () => {
      localStorage.clear()
    }

    return (
        <div className='shopping-cart'>
            <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-removal">Remove</label>
                <label className="product-line-price">Total</label>
            </div>
            {/* {storage ? storage.map(item => <CartItem cart={item} key={item.id}/>) : <h1>Loading</h1>} */}
            {cart.map(item => {
                return <CartItem cart={item} key={item.id}/>
            })}
            <div className="totals">
                <div className="totals-item">
                  <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">{total}</div>
                </div>
                <div className="totals-item">
                  <label>Tax (5%)</label>
                <div className="totals-value" id="cart-tax">{tax}</div>
                </div>
                <div className="totals-item">
                  <label>Shipping</label>
                <div className="totals-value" id="cart-shipping">{shipping}</div>
                </div>
                <div className="totals-item totals-item-total">
                  <label>Grand Total</label>
                  <div className="totals-value" id="cart-total">{finalPrice}</div>
                </div>
            </div>
            <button className="checkout" onClick={clear}>Checkout</button>
        </div>
    )
}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
