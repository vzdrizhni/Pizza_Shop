import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem'

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            {cart.map(item => {
                return <CartItem cart={item} key={item.id}/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
