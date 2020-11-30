import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem'
import './cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div className='cart-items'>
            {cart.map(item => {
                return <CartItem cart={item} key={item.id}/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
