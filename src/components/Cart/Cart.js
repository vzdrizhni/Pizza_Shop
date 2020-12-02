import React, {useState} from 'react'
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem'
import './cart.scss'
import {addToCartAction} from '../../actions/actions'
import OrderHistory from '../OrederHistory/OrderHistory'

import MyVerticallyCenteredModal from '../MyVerticallyCenteredModal/MyVerticallyCenteredModal'

const Cart = ({cart, addToCartAction}) => {
    const [modalShow, setModalShow] = useState(false);

    let disabled = '';
    let numberOfPizzas = cart.reduce((acc, item) => {
      return acc + item.number
    }, 0)

    if (cart.length <= 0 || numberOfPizzas === 0) {
        disabled = 'disabled'
    } else {
        disabled = ''
    }

    const total = cart.reduce((item, next) => {
        return item + next.price*next.number;
    }, 0)
    const shipping = 15;
    const tax = total*0.05;
    const finalPrice = total + shipping + tax;

    if (localStorage.getItem('cartStorage') === null) {
      localStorage.setItem('cartStorage', JSON.stringify(cart));
    } else if (cart.length > JSON.parse(localStorage.getItem('cartStorage')).length) {
      localStorage.setItem('cartStorage', JSON.stringify(cart))
    } else if ((JSON.parse(localStorage.getItem('cartStorage')).length - cart.length) > 1){
      JSON.parse(localStorage.getItem('cartStorage')).map(element => {
        addToCartAction(element)
      });
    } else if ((JSON.parse(localStorage.getItem('cartStorage')).length - cart.length) === 1 && cart.length === 0) {
      console.log(cart.length);
      addToCartAction((JSON.parse(localStorage.getItem('cartStorage'))[0]));
    } else if ((JSON.parse(localStorage.getItem('cartStorage')).length - cart.length) == 1 && cart.length !== 0) {
      localStorage.setItem('cartStorage', JSON.stringify(cart));
    } else if (cart.map(item => JSON.parse(localStorage.getItem('cartStorage')).some(element => item.number !== element.number))) {
      localStorage.setItem('cartStorage', JSON.stringify(cart));
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
            <button className="checkout" onClick={() => setModalShow(true)} disabled={disabled}>Checkout</button>
            <OrderHistory />
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  addToCartAction: value => dispatch(addToCartAction(value)),
});

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
